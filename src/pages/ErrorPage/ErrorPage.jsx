import Footer from "../../components/Footer/Footer";
import Menubar from "../../components/Menubar/Menubar";

const ErrorPage = () => {
    return (
        <div className="container mx-auto px-5">
            <Menubar />
            <h1>Error 404</h1>
            <Footer />
        </div>
    );
};

export default ErrorPage;