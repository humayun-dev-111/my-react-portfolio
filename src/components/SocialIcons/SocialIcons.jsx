import { FaDribbble, FaEnvelope, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialIcons = () => {
    return (
        <div >
            <div className="text-white flex gap-10 text-xl">
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <a href="mailto:mdriead.bd@gmail.com">
                        <FaEnvelope />
                    </a>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <a target="_blank" href="https://github.com/mdrieadmia">
                        <FaGithub />
                    </a>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <a target="_blank" href="https://www.linkedin.com/in/mdriead">
                        <FaLinkedinIn />
                    </a>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <a target="_blank" href="https://www.facebook.com/mdrieadmia.bd">
                        <FaFacebookF />
                    </a>
                </div>
                <div className="flex justify-center items-center p-2 border-white border-2 hover:bg-blue-300 duration-300 hover:border-blue-300 cursor-pointer rounded-full">
                    <a target="_blank" href="https://dribbble.com">
                        <FaDribbble />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialIcons;