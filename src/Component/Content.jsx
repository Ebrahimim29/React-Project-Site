import { FaBars } from "react-icons/fa";
import Gallery from "../Gallery/Gallery";
import Posts from "../Posts/Posts";
import Todos from "../Todos/Todos";
import Users from "../Users/Users";

const Content = () => {
    return (
        <div>
            <FaBars className="pointer"/>
            <Users/>
            <Posts/>
            <Gallery/>
            <Todos/>
        </div>
    );
};

export default Content;