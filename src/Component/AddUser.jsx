const AddUser = () => {
    return (
        <div className={`${style.item_content} mt-5 p-4 bg-gray-400`}>
            <h4 className="text-center text-blue-500">Add User</h4>
            <div className="flex flex-row justify-center mt-5">
                <form className="w-full md:w-1/2 bg-gray-100 rounded-lg shadow-lg p-4">
                    <div className="mb-3">
                        <label htmlFor="exampleInput">Name & LastName</label>
                        <input type="text" className="bg-amber-800" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInput">UserName</label>
                        <input type="text" className="bg-red-400" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInput">Email</label>
                        <input type="email" className="bg-yellow-400" />
                    </div>
                    <div className="mb-3 flex flex-row">
                        <label htmlFor="exampleInput">Address</label>
                        <div className="w-1/2 my-1">
                            <input type="text" placeholder="City" />
                        </div>
                        <div className="w-1/2 my-1">
                            <input type="text" placeholder="Street" />
                        </div>
                        <div className="w-1/2 my-1">
                            <input type="text" placeholder="Code House" />
                        </div>
                        <div className="w-1/2 my-1">
                            <input type="text" placeholder="PostalCode" />
                        </div>
                    </div>

                    <div className="w-full text-start">
                        <button type="button" className="bg-red-400">Back</button>
                        <button type="submit" className="bg-green-400">Save</button>
                    </div>

{/* Part 4 section3 00:37 */}

                </form>
            </div>

        </div>
    );
};

export default AddUser;