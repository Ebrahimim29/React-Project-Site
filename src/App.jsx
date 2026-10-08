import Hello from './Component/Hello';
import Timer from './Component/Timer';

const App = () => {
  
  return (
    <div className="flex flex-col m-8 justify-center items-center bg-amber-300 font-bold text-3xl">
      <Hello/>
      <Timer/>
    </div>
  );
};

export default App;