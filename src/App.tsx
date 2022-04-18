import './App.css'
import React from 'react';
import HomeScreen from './views/screens/home/HomeScreen';
import { ThemeProvider } from "styled-components";
import { lightTheme } from './views/styles/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;
