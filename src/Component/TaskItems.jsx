import { useContext } from "react";
import { taskContext } from "../Context/taskContext";

const TaskItems = () => {
    const { taskItems, setTaskItems } = useContext(taskContext);

    return (
        <ul className="w-full mt-4 space-y-2">
            {taskItems.map(t => (
                <li
                    // استفاده از بک‌تیک تمیز بدون کوتیشن اضافی
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
};

export default TaskItems;