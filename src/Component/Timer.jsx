import { useEffect, useState } from "react";

const Timer = () => {

    const [time, setTime] = useState(new Date().toLocaleTimeString("fa-IR"));

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTime(new Date().toLocaleTimeString("fa-IR"));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return(
        <div className="w-50 h-50 rounded-full shadow-[0_0_50px_white] flex justify-center items-center bg-gray-700 text-cyan-600">
            it is {time}
        </div>
    )
};

export default Timer;