import { useContext } from 'react';
import style from '../style.module.css';
import { MainContext } from '../Context/MainContext';
import { Link } from 'react-router';

const Sidebar = () => {

    const {showMenu, setShowMenu} = useContext(MainContext)

    return (
        <div className={`${style.sidebar_section} bg-amber-700`} 
        style={{
                right: showMenu ? 0 : "-100%",
                transition: "right 0.3s ease"
            }}
            >
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src="/assets/images/1.jpg" alt="pic" />
                </li>
                <li>
                    <Link to="/user">Users</Link>                    
                </li>
                <li>
                    <Link to="/post">Posts</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>                    
                </li>
                <li>
                    <Link to="/todo">Todos</Link>
                </li>
            </ul>
            
        </div>
    );
};

export default Sidebar;
