import Item from "./Item";

const TimeList = (props) => {
    return (
        <div className="flex flex-col justify-center items-center mt-8 p-8 text-green-500">
            {props.children.map((c) => (
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    )
}

export default TimeList;