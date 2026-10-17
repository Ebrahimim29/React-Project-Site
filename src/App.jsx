import { useState } from 'react';
import Hello from './Component/Hello';
import Timer from './Component/Timer';
import { TestContext } from './Context/testContext';

const App = () => {

  const [text, setText] = useState("Hello My Friends");
  const [isLight, setIsLight] = useState(false);

  const [timeArr, setTimeArr] = useState([]);

  const handleSetText = () => {
    setText("Welcome To Site");
  };

  const handleSetIsLight = () => {
    setIsLight(!isLight);
  }

  return (
    <TestContext.Provider value='white'>
      <div style={{ background: isLight ? "white" : "black" }} className="flex flex-col justify-center items-center w-full h-screen font-bold text-3xl">
        <Hello text={text} />
        <Timer
          timeArr={timeArr}
          setTimeArr={setTimeArr}
          handleSetText={handleSetText}
          handleSetIsLight={handleSetIsLight}
          isLight={isLight} />
      </div>
    </TestContext.Provider>

  );
};

export default App;

