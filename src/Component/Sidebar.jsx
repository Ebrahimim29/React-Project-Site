import { useContext } from 'react';
import style from '../style.module.css';
import { MainContext } from '../Context/MainContext';

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
