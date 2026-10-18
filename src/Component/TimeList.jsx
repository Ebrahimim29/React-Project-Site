import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "../Context/testContext";

const TimeList = () => {

    const context = useContext(TestContext)

    return (
        <div className="flex flex-col justify-center items-center mt-8 p-8 text-green-500">
            {context.timeArr.map((c) => (
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}

export default TimeList;