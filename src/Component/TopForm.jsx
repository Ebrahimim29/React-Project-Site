import { Fragment, useContext, useState } from "react";
import { taskContext } from "../Context/taskContext";

const TopForm = () => {

    const [task, setTask] = useState("");
    const {taskItems, setTaskItems} = useContext(taskContext);

    const handleSetTask = (event) =>{
        setTask(event.target.value)
    }

    const handleAddTask = (event) =>{
        event.preventDefault()
        setTaskItems([...taskItems, {id:Math.random(), title:task, done:false}])
    }

    return (
        <Fragment>
            <h4 className="text-white mb-2">Welcome To TODO</h4>
            <form className="w-full px-4" onSubmit={handleAddTask}>
                <div className="flex items-center justify-center gap-2 w-full">
                    <input type="text" className="bg-emerald-400 p-2 rounded-lg flex-1 
                    outline-none text-black" placeholder="Add a Task..."
                    onChange={handleSetTask}/>
                    <button type="submit" className="bg-amber-700 py-2 px-4 rounded-lg whitespace-nowrap">Submit</button>
                </div>
            </form>
        </Fragment>
    )
};

export default TopForm;