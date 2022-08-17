import './App.css'
import React from 'react';
import HomeScreen from './views/screens/home/HomeScreen';
import { ThemeProvider } from "styled-components";
import { lightTheme } from './views/styles/theme';
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SigninScreen from './views/screens/auth/signin/SigninScreen';
import SignupScreen from './views/screens/auth/signup/SignupScreen';
import SetupScreen from './views/screens/auth/setup/SetupScreen';
import PricingScreen from './views/screens/auth/pricing/PricingScreen';
import InviteScreen from './views/screens/auth/invite/InviteScreen';
import MainTabScreen from './views/screens/mainTab/MainTabScreen';
import TabLayout from './views/components/tabLayout/TabLayout';
import DashboardScreen from './views/screens/dashboard/DashboardScreen';
import ProjectManagement from './views/screens/projectManagement/ProjectManagement';
import ChatScreen from './views/screens/chat/ChatScreen';
import AnalyticsScreen from './views/screens/projectManagement/analytics/Analytics';
import VideoChatScreen from './views/screens/videoChat/VideoChatScreen';
import AudioChatScreen from './views/screens/audioChat/AudioChatScreen';
import ProfileScreen from './views/screens/profile/ProfileScreen';

function App() {
  return (
      <Router>
        <ThemeProvider theme={lightTheme}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/setup" element={<SetupScreen />} />
            <Route path="/pricing" element={<PricingScreen />} />
            <Route path="/invite" element={<InviteScreen />} />
            <Route path="/home" element={<TabLayout><DashboardScreen /></TabLayout>} />
            <Route path="/chat" element={<TabLayout><ChatScreen /></TabLayout>} />
            <Route path="/video-chat" element={<TabLayout><VideoChatScreen /></TabLayout>} />
            <Route path="/audio-chat" element={<TabLayout><AudioChatScreen /></TabLayout>} />
            <Route path="/profile" element={<TabLayout><ProfileScreen /></TabLayout>} />
            <Route path="/project-management" element={<TabLayout><ProjectManagement /></TabLayout>} />
            <Route path="/project-management/analytics" element={<TabLayout><AnalyticsScreen /></TabLayout>} />
          </Routes>
        </ThemeProvider>
      </Router>
  );
}

export default App;
