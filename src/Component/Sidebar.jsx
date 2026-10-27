const Sidebar = () => {
    return (
        <div className="bg-amber-700">
            <ul className="m-0 p-0">
                <li>
                    <img src="/assets/images/1.jpg" alt="" />
                </li>
                <li>
                    <a href="/">Users</a>                    
                </li>
                <li>
                    <a href="/">Posts</a>
                </li>
                <li>
                    <a href="/">Gallery</a>                    
                </li>
                <li>
                    <a href="/">Todos</a>
                </li>
            </ul>
            
        </div>
    );
};

export default Sidebar;
