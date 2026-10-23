import { useContext } from "react";
import { taskContext } from "../Context/taskContext";
import { FaTrash, FaEdit, FaPlus, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const TaskItems = () => {

    const { taskItems, setTaskItems } = useContext(taskContext);

    const handleSetDoneTask = (id)=>{
        const index = taskItems.findIndex(t=>t.id === id);
        // alert(index)
        let newTaskItems = [...taskItems]
        newTaskItems[index].done = !newTaskItems[index].done;
        setTaskItems(newTaskItems);
    }

    const handleDeletTask = (id)=>{
        const newTasks = taskItems.filter(t=>t.id !== id);
        setTaskItems(newTasks)
    }
    

    if (taskItems.length) {
        return (
            <ul className="w-full mt-4 space-y-2">
                {taskItems.map(t => (
                    <li
                        className={`
                            flex justify-between items-center p-3 rounded-lg text-lg
                            ${t.done ? "bg-green-400 text-black" : "bg-gray-800 text-white"}
                        `}
                        key={t.id}
                    >
                        <span>{t.title}</span>

                        <div className="flex items-center gap-3">

                            <button
                                onClick={()=>handleSetDoneTask(t.id)}
                                className={`transition-colors ${
                                    t.done
                                        ? "text-green-900 hover:text-green-700"
                                        : "text-red-500 hover:text-red-700"
                                }`}
                            >
                                {t.done ? <FaCheckCircle size={20} /> : <FaTimesCircle size={20} />}
                            </button>

                            <button
                                className="text-red-500 hover:text-red-700 transition-colors"
                                title="حذف"
                                onClick={()=>handleDeletTask(t.id)}
                            >
                                <FaTrash size={18} />
                            </button>

                            <button
                                className="text-yellow-400 hover:text-yellow-600 transition-colors"
                                title="ویرایش"
                            >
                                <FaEdit size={20} />
                            </button>

                            <button
                                className="text-emerald-500 hover:text-emerald-700 transition-colors"
                                title="افزودن"
                            >
                                <FaPlus size={20} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        );
    } else {
        return (
            <h4 className="text-center text-red-600 mt-8">
                THERE IS NOT ANY ITEMS
            </h4>
        );
    }
};

export default TaskItems;