import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import Chatbot from "./Chatbot";


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Chatbot />
    </div>
  );
}

export default App
