import { Button } from "@material-tailwind/react";
import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Home = () => {
  const handleDownload = () => {
    const fileId = "1jjMDEURK7s7RXpCIxC7_ehfLQSiR5BXt";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    window.location.assign(downloadUrl);
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 pt-20">
      <div className="container mx-auto text-white flex flex-col md:flex-row gap-10 items-center h-screen overflow-hidden px-8">
        <div className="h-auto">
          <h3
            data-aos-duration="1000"
            data-aos="fade-right"
            className="text-xl md:text-2xl lg:text-3xl xl:text-5xl"
          >
            It&apos;s Me
          </h3>
          <h1
            data-aos-duration="1000"
            data-aos="fade-left"
            className="text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold py-3 xl:py-5"
          >
            MD. HUMAYUN KABIR SOBUJ
          </h1>
          <h3
            data-aos-duration="1000"
            data-aos="fade-right"
            className="text-3xl font-semibold"
          >
            I&apos;m a
            <span className="text-blue-300">
              <Typewriter
                words={[
                  " Full Stack Developer",
                  " Node JS Developer",
                  " Backend Developer",
                ]}
                loop={true}
                cursor={1}
                cursorBlinking={0}
                cursorStyle="_"
                cursorColor="#2196F3"
              />
            </span>
          </h3>
          <p
            data-aos-duration="1000"
            data-aos="fade-up"
            className="max-w-[550px] text-justify font-light pt-3"
          >
           Highly skilled Backend Developer with solid knowledge of Node.js, Express.js, NestJS, MongoDB, Mongoose, PostgreSQL, and Prisma. I am also familiar with React, Next.js, and Redis.
          </p>
          <div className="pt-10">
            <SocialIcons />
          </div>
          <div className="pt-10">
            <Button
              data-aos-duration="1000"
              data-aos="fade-up"
              className="normal-case bg-blue-300 rounded-full hover:scale-105 duration-300"
              onClick={handleDownload}
            >
              Hire Me
            </Button>
          </div>
        </div>
        <div className="h-full flex items-end">
          {/* <Image data-aos-duration="1000" data-aos="fade-up"  width="400" alt="My Photo" height="auto" className="w-full object-cover mt-20" src={MyPhoto}></Image> */}
        </div>
      </div>

      
    </div>
  );
};

export default Home;
