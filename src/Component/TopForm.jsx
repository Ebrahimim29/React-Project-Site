import { Fragment } from "react";

const TopForm = () => {
    return (
        <Fragment>
            <h4 className="text-white mb-2">Welcome To TODO</h4>
            <form className="w-full px-4">
                <div className="flex items-center justify-center gap-2 w-full">
                    <input type="text" className="bg-emerald-400 p-2 rounded-lg flex-1 
                    outline-none text-black" placeholder="Add a Task..."/>
                    <button type="submit" className="bg-amber-700 py-2 px-4 rounded-lg whitespace-nowrap">Submit</button>
                </div>
            </form>
        </Fragment>
    )
};

export default TopForm;