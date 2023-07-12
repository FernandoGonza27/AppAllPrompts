import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
 const Home = () =>{
    return(
        <div className=""> 
            <Navbar></Navbar> 
            <Outlet></Outlet>
        </div>
    );

 }

 export default Home;