import { useContext } from "react";
import { TestContext } from "../Context/testContext";

const Item = (props) => {

    const context = useContext(TestContext)

    const handleDeleteItem = (e) => {
        context.setTimeArr(context.timeArr.filter(t=>t!=e.target.innerHTML))
    }

    return(
        <div className="animate-bounce cursor-pointer" onClick={handleDeleteItem}>
            {props.children}
        </div>
    )
};

export default Item;