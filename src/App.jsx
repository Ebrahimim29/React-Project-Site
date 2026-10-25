import { useState } from 'react';
import Hello from './Component/Hello';
import Timer from './Component/Timer';
import { TestContext } from './Context/testContext';
import TimeList from './Component/TimeList';
import TodoList from './Component/TodoList';
import { taskContext as TaskContext } from './Context/taskContext'; 
import PureComponent from './Component/PureComponent';

const App = () => {
  const [text, setText] = useState("Hello My Friends");
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState([]);
  
  const [taskItems, setTaskItems] = useState([
    { id: 1, title: "Work No.1", done:false },
    { id: 2, title: "Work No.2", done:true },
    { id: 3, title: "Work No.3", done:false }
  ])

  const handleSetText = () => {
    setText("Welcome To Site");
  };

  const handleSetIsLight = () => {
    setIsLight(!isLight);
  }

  return (
    <TestContext.Provider value={{ timeArr, setTimeArr }}>
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
        
        <TaskContext.Provider value={{ taskItems, setTaskItems }}>
          <TodoList text={text} />
        </TaskContext.Provider>

        <PureComponent/>
        
      </div>
    </TestContext.Provider>
  );
};

export default App;