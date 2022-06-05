import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#141313';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
    
    }
  }
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter the text to analyze " mode={mode} />
      </div>
    </>
  );
}

export default App;
