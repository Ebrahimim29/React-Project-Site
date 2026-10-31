import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import style from "../style.module.css";

const Users = () => {
    return (
        <div className={`${style.item_content} mt-5 p-6 bg-gray-900 min-h-screen text-white`}>
            <h4 className="text-center text-2xl font-bold mb-8">مدیریت کاربران</h4>
            
            {/* بخش جستجو و دکمه افزودن */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <div className="w-full md:w-1/3">
                    <input 
                        type="text" 
                        placeholder="جستجو..." 
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500 text-white"
                    />
                </div>
                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <FaPlus /> افزودن کاربر
                </button>
            </div>

            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="w-full text-left border-collapse bg-gray-800">
                    <thead>
                        <tr className="bg-gray-700 text-gray-300 border-b-2 border-amber-500">
                            <th className="p-4 text-center">#</th>
                            <th className="p-4">Name</th>
                            <th className="p-4">UserName</th>
                            <th className="p-4">Email</th>
                            <th className="p-4 text-center">Action</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-700 hover:bg-gray-750 transition-colors">
                            <td className="p-4 text-center">1</td>
                            <td className="p-4">Mohammad</td>
                            <td className="p-4">Ebrahimim29</td>
                            <td className="p-4">Ebrahimim29@gmail.com</td>
                            <td className="p-4 flex justify-center gap-4 text-xl">
                                <button className="text-blue-400 hover:text-blue-300"><FaEdit/></button>
                                <button className="text-red-400 hover:text-red-300"><FaTrash/></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;