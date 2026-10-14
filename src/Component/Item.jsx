const Item = (props) => {
    return(
        <div className="animate-bounce">
            {props.children}
        </div>
    )
};

export default Item;