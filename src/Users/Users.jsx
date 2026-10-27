import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";

const Users = () => {
    return (
        <div className="mt-5 p-4">

            <h4 className="text-center">مدیریت کاربران</h4>
            <div className="my-2 mb-4 justify-between w-100 mx-0">
                <div>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="text-start px-0">
                    <button className="text-green-600">
                        <FaPlus/>
                    </button>
                </div>
                <table>
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