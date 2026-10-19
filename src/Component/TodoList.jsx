import TaskItems from "./TaskItems";
import TopForm from "./TopForm";

const TodoList = ({ text }) => {
    return (
        <div className="flex flex-col justify-center items-center w-full max-w-md mt-8 p-4 border border-gray-600 rounded-lg bg-gray-900/50">
            <h4 className="text-yellow-500 mb-4">TODO</h4>
            <TopForm />
            <TaskItems />
        </div>
    );
};

export default TodoList;