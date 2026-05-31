import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
    return (
        <div className="container mx-auto px-5 py-12 border-t border-gray-800 text-white">
           <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
                <img className="w-40" src="https://i.postimg.cc/sgwG7fVs/logo.png" alt="Logo" />
            </div>
            <div className="flex justify-center flex-col md:flex-row items-center gap-5 pt-5">
                <h1 className="text-xl font-semibold">Follow Me : </h1>
                <SocialIcons/>
            </div>
           </div>
           <p className="pt-10 text-center md:text-end">&copy;2024 All Right Reserved By RIEAD</p>
        </div>
    );
};

export default Footer;