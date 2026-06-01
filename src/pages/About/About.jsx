import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
AOS.init();

const page = () => {
  return (
    <div className="container mx-auto px-5 py-20 min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div
          data-aos-duration="1000"
          data-aos="fade-right"
          className="w-full lg:w-1/2"
        >
          <div className="p-10 w-[70%] rounded-xl bg-transparent flex justify-center items-center flex-col gap-5 text-white">
            <div className="">
              <div className="bg-gray-800 h-72 w-72 pt-5 rounded-full p-4">
                <img
                  className="h-64 w-64 object-cover rounded-full"
                  src="/aboutMePhoto.png"
                  alt="Humayun profile photo"
                />
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-center text-4xl">
                MD. HUMAYUN KABIR SOBUJ
              </h1>
              <p className="font-medium text-center text-xl mt-3">
                Full Stack Developer
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-left"
          className="w-full lg:w-1/2"
        >
          <h2 className="text-3xl font-semibold text-white">Who I Am?</h2>
          <p className="font-medium text-white mt-3 text-justify">
            I am a highly skilled Backend Developer with strong hands-on
            experience in Node.js, Express.js, NestJS, MongoDB, Mongoose,
            PostgreSQL, and Prisma. I am also familiar with React, Next.js, and
            Redis, which helps me collaborate smoothly across both backend and
            frontend workflows. I focus on building secure, scalable, and
            maintainable web applications with clean architecture and efficient
            API design. My goal is to deliver reliable solutions that support
            real business needs and long-term product growth.
          </p>
          <div className="flex gap-3 items-center pt-10">
            <p className=" text-white font-semibold text-xl">
              Let&apos;s Connect -{" "}
            </p>
            <div>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
