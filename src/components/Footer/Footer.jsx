import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
  return (
    <div className="container mx-auto px-5 py-12 border-t border-gray-800 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to={'/'} className="inline-block">
          <span
            className="text-xl font-semibold tracking-[0.16em] text-white transition-colors duration-300 hover:text-blue-300 sm:text-2xl"
            style={{ fontFamily: "Bai Jamjuree" }}
          >
            Humayun
          </span>
        </Link>

        <div className="flex justify-center flex-col md:flex-row items-center gap-5">
          <h1 className="text-xl font-semibold">Follow Me :</h1>
          <SocialIcons />
        </div>
      </div>
      <p className="pt-10 text-center md:text-end">&copy;2024 All Right Reserved By HUMAYUN</p>
    </div>
  );
};

export default Footer;
