import { Fragment } from "react";

const TopForm = () => {
    return (
        <Fragment>
            <h4>Welcome To TODO</h4>
            <form>
                <div className="flex items-center justify-center">
                    <input type="text" className="bg-emerald-400 ml-1" />
                    <button type="submit" className="bg-amber-700 p-2 rounded-2xl">Submit</button>
                </div>
            </form>
        </Fragment>
    )
};

export default TopForm;