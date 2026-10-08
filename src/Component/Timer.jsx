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
        <div>
            it is {time}
        </div>
    )
};

export default Timer;