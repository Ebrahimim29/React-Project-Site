import { useState } from "react";
import PureCompo from "./PureCompo";

const PureComponent = () => {

    const [name, setName] = useState("Mohammad");

    setInterval(() => {
        setName("MirEbrahimi" + new Date().toLocaleTimeString())
    }, 1000)

    // console.log("Pure");
    

    return (
        
        <div>
            <PureCompo name={name}/>
        </div>
    )
};

export default PureComponent;