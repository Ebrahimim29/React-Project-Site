import { useState } from 'react';
import Hello from './Component/Hello';
import Timer from './Component/Timer';
import { TestContext } from './Context/testContext';
import TimeList from './Component/TimeList';
import TodoList from './Component/TodoList';

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
    <TestContext.Provider value={{ timeArr, setTimeArr }}>
      {/* تغییر h-screen به min-h-screen و اضافه کردن py-10 */}
      <div 
        style={{ background: isLight ? "white" : "black", color: isLight ? "black" : "white" }} 
        className="flex flex-col justify-center items-center min-h-screen w-full font-bold text-3xl py-10 gap-6"
      >
        <Hello text={text} />
        
        <Timer
          timeArr={timeArr}
          setTimeArr={setTimeArr}
          handleSetText={handleSetText}
          handleSetIsLight={handleSetIsLight}
          isLight={isLight} 
        />
        
        <TimeList />
        
        {/* پاس دادن متن به TodoList */}
        <TodoList text={text} />
      </div>
    </TestContext.Provider>
  );
};

export default App;