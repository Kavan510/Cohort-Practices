import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Otp } from './otp';
import { Sidebarbasic } from './components/sidebar';



function App() {
  return (
    <div className="h-screen bg-white dark:bg-blue-200 dark:text-white">
    Hii
    <button 
    onClick={()=>{
      document.querySelector("html").classList.toggle("dark");
    }}>
      Toggle Theme
    </button>
  </div>
  
  );
}

export default App;
