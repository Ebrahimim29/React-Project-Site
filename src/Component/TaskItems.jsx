const TaskItems = () => {
    return (
        <ul className="w-full mt-4 space-y-2">
            <li className="flex justify-between items-center bg-gray-800 text-white p-3 rounded-lg text-lg">
                کار شماره 1
                <span className="text-sm text-gray-400">حذف</span>
            </li>
            <li className="flex justify-between items-center bg-gray-800 text-white p-3 rounded-lg text-lg">
                کار شماره 2
                <span className="text-sm text-gray-400">حذف</span>
            </li>
        </ul>
    );
}

export default TaskItems;