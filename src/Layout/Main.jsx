import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    const location =useLocation(); 
    console.log(location.pathname); 
    return (
        <div>
            {location.pathname!='/login' && <Navbar/> }
            <Outlet/>
            {location.pathname!='/login' && <Footer/> }
        </div>
    );
};

export default Main;