import { useContext } from "react";
import { taskContext } from "../Context/taskContext";

const TaskItems = () => {
    const { taskItems } = useContext(taskContext);

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
                        {t.title}
                        <span className="text-sm text-gray-400">حذف</span>
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