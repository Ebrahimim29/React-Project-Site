import { useState } from 'react';
import Hello from './Component/Hello';
import Timer from './Component/Timer';

const App = () => {
  
  const [text, setText] = useState("Hello My Friends");

  const handleSetText = () => {
    setText("Welcome To Site");
  };

  return (
    <div className="flex flex-col justify-center items-center bg-black/50 w-full h-screen font-bold text-3xl">
      <Hello text={text}/>      
      <Timer handleSetText={handleSetText}/>      
    </div>
  );
};

export default App;