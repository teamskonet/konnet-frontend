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
            <Route path="/home" element={<MainTabScreen />} />
          </Routes>
        </ThemeProvider>
      </Router>
  );
}

export default App;
