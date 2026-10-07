import { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('fa-IR'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString('fa-IR'));
    }, 1000);

    // پاک‌سازی interval وقتی کامپوننت unmount میشه
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-amber-500 font-bold text-3xl animate-bounce">
      <h1>Hello My Friends</h1>
      <h2>it is {time}</h2>
    </div>
  );
};

export default App;