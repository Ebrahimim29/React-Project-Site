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
        setTask("")
    }

    return (
        <Fragment>
            <h4 className="text-white mb-2">Welcome To TODO</h4>
            <form className="flex items-center justify-between w-full gap-2 px-2" onSubmit={handleAddTask}>
                    <input type="text" 
                    className="flex-1 w-full p-2 rounded" 
                    placeholder="Add a Task..."
                    onChange={handleSetTask}
                    value={task}
                    />
                    <button type="submit" 
                    className="px-4 py-2 bg-orange-600 rounded shrink-0">
                        Submit
                    </button>                
            </form>
        </Fragment>
    )
};

export default TopForm;