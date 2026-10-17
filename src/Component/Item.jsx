import { useContext } from "react";
import { TestContext } from "../Context/testContext";

const Item = (props) => {

    const context = useContext(TestContext)
    return(
        <div className="animate-bounce" style={{color:context}}>
            {props.children}
        </div>
    )
};

export default Item;