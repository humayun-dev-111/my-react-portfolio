import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { HiDownload } from "react-icons/hi";

const Menubar = () => {

    const [openNav, setOpenNav] = React.useState(false);

    const handleDownload = () => {
        const aTag = document.createElement('a')
        aTag.href = "https://riead.netlify.app/Resume_of_Riead_Frontend_Web_Developer.pdf"
        aTag.setAttribute('download', "Resume_Of_RIEAD_Frontend_Web_Developer")
        document.body.append(aTag);
        aTag.click();
        aTag.remove();
    }
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-white"
                style={{ fontFamily: "Bai Jamjuree" }}
            >
                <Link to={'/'} className="flex items-center">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-white"
                style={{ fontFamily: "Bai Jamjuree" }}
            >
                <Link to={'/about'} className="flex items-center">
                    About Me
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-white"
                style={{ fontFamily: "Bai Jamjuree" }}
            >
                <Link to={'/skills'} className="flex items-center">
                    Skills
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-white"
                style={{ fontFamily: "Bai Jamjuree" }}
            >
                <Link to={'/education'} className="flex items-center">
                    Education
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-white"
                style={{ fontFamily: "Bai Jamjuree" }}
            >
                <Link to={'/portfolio'} className="flex items-center">
                    Portfolio
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-white"
                style={{ fontFamily: "Bai Jamjuree" }}
            >
                <Link to={'/contact'} className="flex items-center">
                    Contact
                </Link>
            </Typography>

        </ul>
    );


    return (
        <div>
            <div className="container mx-auto">
                <Navbar className="fixed  max-w-auto -top-0 left-[50%] -translate-x-1/2 z-10 backdrop-saturate-30 bg-opacity-100 rounded-none backdrop-blur-30 bg-transparent border-none py-5 shadow-none border">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Typography
                            className="cursor-pointer font-medium"
                        >
                            <Link to={'/'}>
                                <img className="w-32" src="https://i.postimg.cc/C1QgHJvv/logo.png" alt="Logo" />
                            </Link>
                        </Typography>
                        <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block">{navList}</div>
                            <div className="flex items-center gap-x-1">
                                <Button
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block normal-case"
                                    onClick={handleDownload}
                                >
                                    <span className="flex justify-center items-center gap-1 text-white">Resume <HiDownload className="text-lg" /> </span>
                                </Button>
                            </div>
                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6"
                                        viewBox="0 0 24 24"
                                        stroke="white"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>
                        </div>
                    </div>
                    <MobileNav open={openNav}>
                        {navList}
                        <div className="flex items-center gap-x-1">
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block normal-case"
                                onClick={() => handleDownload()}
                            >
                                <span className="flex justify-center items-center gap-1 text-white">Resume <HiDownload className="text-lg" /> </span>
                            </Button>
                        </div>
                    </MobileNav>
                </Navbar>

            </div>
        </div>
    );
};

export default Menubar;