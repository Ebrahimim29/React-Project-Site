import { useEffect, useState } from "react";

const Timer = ({ handleSetText , handleSetIsLight, isLight}) => {

    const [time, setTime] = useState(new Date().toLocaleTimeString("fa-IR"));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString("fa-IR"));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <p className="mt-16 w-50 h-50 rounded-full shadow-[0_0_50px_white] flex justify-center items-center bg-gray-700 text-cyan-600">{time}</p>
            <br />
            <div className="mt-8 flex justify-center items-center text-amber-300">
                <button className="border-2 rounded-3xl p-2 bg-amber-900 shadow-amber-600" onClick={handleSetText}>Change</button>
                <button className="border-2 rounded-3xl p-2 ml-4 bg-emerald-500 shadow-amber-600" onClick={handleSetIsLight}>ChangeColor</button>
            </div>
        </div>
    )
};

export default Timer;