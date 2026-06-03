import { FaExternalLinkSquareAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Portfolio = () => {
  return (
    <div className="container mx-auto px-5 pt-32 pb-20">
      <div className="pt-10 flex gap-20 text-white flex-col">
        <div className="flex gap-12 flex-col lg:flex-row">
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="w-full lg:w-[30%] overflow-hidden rounded-xl"
          >
            <img
              className="rounded-xl w-full h-[220px] md:h-[280px] lg:h-[240px] object-cover object-top hover:scale-105 duration-200"
              src="/ScneAds.png"
              alt="Scne Ads Image"
            />
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="w-full lg:w-[70%]"
          >
            <div className="flex items-center gap-4 flex-col md:flex-row">
              <div className="flex items-center gap-5">
                <h2 className="text-2xl text-center md:text-left font-semibold">
                  Scne Ads
                </h2>
                <p className="text-lg text-center md:text-left font-medium text-nowrap pt-1">
                  (BillBoard Booking Website)
                </p>
              </div>
              <div className="flex text-blue-200 gap-7 ml-7">
                <a href="https://scne-ads.netlify.app" target="_blank">
                  <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                    Live Site{" "}
                    <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                  </p>
                </a>
                <a
                  href="https://github.com/humayun-dev-111/Scne-Ads-Frontend"
                  target="_blank"
                >
                  <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                    Client Code{" "}
                    <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                  </p>
                </a>
                <a
                  href="https://github.com/humayun-dev-111/Scne-Ads-Backend"
                  target="_blank"
                >
                  <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">
                    Server Code{" "}
                    <FaExternalLinkSquareAlt className="mb-[2px] ml-2" />
                  </p>
                </a>
              </div>
            </div>
            <p className="text-justify pt-5">
              Developed a full-stack ads management and e-commerce platform that
              connects businesses with billboard owners, enabling seamless
              advertisement creation, management, and display. The platform
              features an interactive Google Maps integration for discovering
              available billboard locations, secure Stripe payment processing
              for ad campaigns, a centralized admin dashboard for managing
              users, screens, and campaigns, and a real-time WebSocket-based
              chat system that facilitates instant communication between
              businesses and billboard owners while providing live campaign
              updates.
            </p>
            <p className="pt-2 font-semibold">
              Technology Used : React, TypeScript, Redux, Tailwind CSS,
              ShadCN/UI, Google Maps API, LightswindUI, Node.js, Express.js,
              PostgreSQL, Prisma ORM, Supabase , Stripe( Payment ), WebSocket,
              node-cron .
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
