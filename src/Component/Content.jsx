import { FaBars } from "react-icons/fa";
import Gallery from "../Gallery/Gallery";
import Posts from "../Posts/Posts";
import Todos from "../Todos/Todos";
import Users from "../Users/Users";
import style from "../style.module.css";
import { useContext } from "react";
import { MainContext } from "../Context/MainContext";

const Content = () => {

    const {showMenu, setShowMenu} = useContext(MainContext)

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className={style.content_section}>
            <FaBars 
            onClick={handleShowMenu}
            className={`${style.menu_button} text-red-700 m-2 pointer`}/>
            <Users/>
            <Posts/>
            <Gallery/>
            <Todos/>
        </div>
    );
};

export default Content;