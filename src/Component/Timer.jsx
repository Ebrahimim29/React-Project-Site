import { useContext, useEffect, useState } from "react";
import TimeList from "./TimeList";
import { TestContext } from "../Context/testContext";

const Timer = ({ 
    handleSetText, 
    handleSetIsLight, 
    isLight, 
    timeArr,
    setTimeArr
    }) => {

    const context = useContext(TestContext)
    
    const [time, setTime] = useState(new Date().toLocaleTimeString("fa-IR"));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString("fa-IR"));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleSaveTime = () => {
        const clickedTime = new Date().toLocaleTimeString("fa-IR");
        setTimeArr((prevTimes)=>[...prevTimes, clickedTime]);
    }

    const handleClearTimes = () => {
        setTimeArr([]);
    }

    return (
        <div className="flex flex-col justify-center items-center w-full" style={{color:context}}>
            <p className="mt-16 w-50 h-50 rounded-full shadow-[0_0_50px_white] 
            flex justify-center items-center bg-gray-700 text-cyan-600 cursor-pointer hover:shadow-amber-600"
            onClick={handleSaveTime}>
                {time}
            </p>

            <div className="mt-8 flex flex-col justify-center items-center text-amber-300">
                <div className="flex justify-center items-center">
                    
                    <button className="border-2 rounded-3xl p-2 bg-amber-900 shadow-amber-600 hover:bg-emerald-400 cursor-pointer" 
                    onClick={handleSetText}>
                        Change
                    </button>

                    <button className="border-2 rounded-3xl p-2 m-2 cursor-pointer"
                        onClick={handleSetIsLight}
                        style={{ background: isLight ? "black" : "white", color: isLight ? "white" : "black" }}>
                        {isLight ? "Dark" : "Light"}
                    </button>

                    <button className="border-2 rounded-3xl p-2 m-2 cursor-pointer bg-red-500 hover:bg-amber-300"
                    onClick={handleClearTimes}>
                        ClearList
                    </button>
                </div>               

            </div>
        </div>
    )
};

export default Timer;