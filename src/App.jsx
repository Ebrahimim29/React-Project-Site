import Hello from './Component/Hello';
import Timer from './Component/Timer';

const App = () => {
  
  return (
    <div className="flex flex-col justify-center items-center bg-black/50 w-full h-screen font-bold text-3xl">
      <Hello/>
      <Timer/>
    </div>
  );
};

export default App;