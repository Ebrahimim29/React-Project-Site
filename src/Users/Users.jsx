import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import style from "../style.module.css";

const Users = () => {
    return (
        <div className={`${style.item_content} mt-5 p-4`}>

            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="my-2 mb-4 justify-between w-100 mx-0">
                <div className="mb-4 w-10/12 md:w-6/12 lg:w-4/12">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="text-start px-0">
                    <button className="text-green-600">
                        <FaPlus className="text-yellow-700"/>
                    </button>
                </div>
                <table className="bg-lime-700 shadow">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mohammad</td>
                            <td>Ebrahimim29</td>
                            <td>Ebrahimim29@gmail.com</td>
                            <td>
                                <FaEdit/>
                                <FaTrash/>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


            
        </div>
    );
};

export default Users;