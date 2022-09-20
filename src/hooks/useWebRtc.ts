import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:4000");

const  useWebRtc = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState<any>(null);

  const servers = {
    iceServers: [
      {
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
      },
    ],
    iceCandidatePoolSize: 10,
  };
  const pc = new RTCPeerConnection(servers);
  
  let localStream = null;
  let remoteStream = null;

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }

  return { isConnected, sendPing, socket }
}

export default useWebRtc;