import { FaBars } from "react-icons/fa";
import Gallery from "../Gallery/Gallery";
import Posts from "../Posts/Posts";
import Todos from "../Todos/Todos";
import Users from "../Users/Users";
import style from "../style.module.css";
import { useContext, useState } from "react";
import { MainContext } from "../Context/MainContext";
import { Navigate, Route, Routes } from "react-router";

const Content = () => {

    const {showMenu, setShowMenu} = useContext(MainContext)
    // const [isUser, setIsUser] = useState(true);

    const handleShowMenu = (event) => {
        event.stopPropagation()
        setShowMenu(!showMenu)
        console.log(showMenu);
        
    }

    return (
        <div className={style.content_section} onClick={()=>{setShowMenu(false)}}>
            <FaBars 
            onClick={handleShowMenu}
            className={`${style.menu_button} text-red-700 m-2 pointer`}/>

                <Routes>
                    {/* <Route path="/user" element={isUser ? <Users/> : <Navigate replace to="/gallery"/>}></Route> */}
                    <Route path="/user" element={<Users/>}></Route>
                    <Route path="/post" element={<Posts/>}></Route>
                    <Route path="/gallery" element={<Gallery/>}></Route>
                    <Route path="/todo" element={<Todos/>}></Route>
                    <Route path="*" element={<Users/>}></Route>
                </Routes>
          

        </div>
    );
};

export default Content;