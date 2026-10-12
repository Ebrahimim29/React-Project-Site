import { useState } from 'react';
import Hello from './Component/Hello';
import Timer from './Component/Timer';

const App = () => {
  
  const [text, setText] = useState("Hello My Friends");
  const [isLight, setIsLight] = useState(false);

  const handleSetText = () => {
    setText("Welcome To Site");
  };

  const handleSetIsLight = () => {
    setIsLight(!isLight);
  }

  return (
    <div style={{background:isLight ? "white" : "black"}} className="flex flex-col justify-center items-center w-full h-screen font-bold text-3xl">
      <Hello text={text}/>      
      <Timer handleSetText={handleSetText} handleSetIsLight={handleSetIsLight} isLight={isLight}/>      
    </div>
  );
};

export default App;