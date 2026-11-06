import { useContext } from 'react';
import style from '../style.module.css';
import { MainContext } from '../Context/MainContext';
import { Link, NavLink } from 'react-router';
import myImage from '/assets/image/1.jpg';


const Sidebar = () => {

    const { showMenu, setShowMenu } = useContext(MainContext)

    return (
        <div className={`${style.sidebar_section} bg-amber-700`}
            style={{
                right: showMenu ? 0 : "-100%",
                transition: "right 0.3s ease"
            }}
        >
            <ul className={`${style.sidebar_list} m-0 p-0`}>
                <li className={style.sidebar_avatar}>
                    <img src={myImage} alt="pic" />
                </li>
                <NavLink to="/user"
                    className={({ isActive }) => { return isActive ? "active_nav" : "" }}>
                    <li>Users</li>
                </NavLink>
                <NavLink to="/post"
                    className={({ isActive }) => { return isActive ? "active_nav" : "" }}>
                    <li>Posts</li>
                </NavLink>
                <NavLink to="/gallery"
                    className={({ isActive }) => { return isActive ? "active_nav" : "" }}>
                    <li>Galleries</li>
                </NavLink>
                <NavLink to="/todo"
                    className={({ isActive }) => { return isActive ? "active_nav" : "" }}>
                    <li>ToDos</li>
                </NavLink>

                {/* <li>
                    <Link to="/todo">Todos</Link>
                </li> */}
            </ul>

        </div>
    );
};

export default Sidebar;

