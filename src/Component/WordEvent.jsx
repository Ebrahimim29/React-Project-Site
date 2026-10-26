import { useEffect, useRef, useState } from "react";

let counter = 0;

const WordEvent = () => {

    const [name, setName] = useState("");
    const myInput = useRef();

    const handleChangeName = () => {
        setName(myInput.current.value)
    }

    useEffect(()=>{
        myInput.current.focus()
    }, [])
    
    return(
        <div className="text-center mt-4 p-3 flex flex-col">
            <h4 className="text-center text-green-700">Word Event</h4>
            <input type="text" className="bg-white text-red-700" ref={myInput} autoComplete="off" />
            
            <button className="my-3 bg-amber-700 p-4 rounded" 
            onClick={handleChangeName}>Regestration</button>

            <button className="my-3 bg-blue-700 p-4 rounded" 
            onClick={()=>{myInput.current.value = ""}}>Hidden</button>

            <span>{counter++}</span>
        </div>
    )
};

export default WordEvent;