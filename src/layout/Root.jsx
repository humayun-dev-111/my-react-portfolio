import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Menubar from "../components/Menubar/Menubar";

const Root = () => {
    return (
        <div className="bg-gray-900">
            <Menubar />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;