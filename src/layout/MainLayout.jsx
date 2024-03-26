import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <div>
            <div className="h-20">
            <NavBar/>
            </div>
            <div className="min-h-[calc(100vh-132px)]">
           <Outlet/>
           </div>
        </div>
    );
};

export default MainLayout;