import { memo } from "react";

const PureCompo = (props) => {
    // console.log("---pure");
        
    return(
        <h1 className="text-center text-blue-500 mt-4">
            {"Pure Component:" + props.name}
        </h1>
    )
};

export default memo(PureCompo);