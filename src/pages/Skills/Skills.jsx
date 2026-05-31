import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const Skills = () => {
  return (
    <div className="container mx-auto px-5 pt-32 min-min-h-screen">
      <div>
        <div className="text-center mb-10">
          <Typography variant="h3" color="white" className="text-3xl md:text-4xl">
            Skills & Technologies
          </Typography>
          <Typography className="text-gray-400 mt-3">
            Tools and technologies I use to build modern web applications.
          </Typography>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          <Timeline>
            <TimelineItem data-aos-duration="800" data-aos="fade-up" className="ml-2">
              <TimelineConnector />
              <TimelineHeader className="pb-10">
                <TimelineIcon className="p-0">
                  <div className="w-5 h-5 rounded-full bg-blue-300"></div>
                </TimelineIcon>
                <Typography variant="h5" color="white" className="text-2xl ml-2">
                  Frontend Technologies
                </Typography>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem data-aos-duration="1000" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Dark.svg" alt="Tailwind CSS" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Tailwind CSS</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Experienced in using Tailwind CSS for rapid and efficient UI development.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1200" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg" alt="JavaScript" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">JavaScript</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Proficient in JavaScript for dynamic, interactive web application development.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1400" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg" alt="Typescript" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Typescript</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Proficient in Typescript for dynamic, interactive web application development.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1600" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg" alt="React JS" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">React JS</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Skilled in building dynamic, efficient, and scalable user interfaces with React JS.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1800" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg" alt="Next.js" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Next.js</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Expert in Next.js for building fast, SEO-friendly, and scalable web applications.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="2000" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Redux.svg" alt="Redux" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Redux</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Experienced with Redux for state management in complex React applications.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="2200" data-aos="fade-up">
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Redux.svg" alt="RTK Query" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">RTK Query</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Skilled in using RTK Query for efficient data fetching and caching in Redux applications.
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>

          <Timeline>
            <TimelineItem data-aos-duration="800" data-aos="fade-up" className="ml-2">
              <TimelineConnector />
              <TimelineHeader className="pb-10">
                <TimelineIcon className="p-0">
                  <div className="w-5 h-5 rounded-full bg-blue-300"></div>
                </TimelineIcon>
                <Typography variant="h5" color="white" className="text-2xl ml-2">
                  Backend Technologies
                </Typography>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem data-aos-duration="1000" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg" alt="Typescript" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Typescript</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Proficient in Typescript for dynamic, interactive web application development.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1200" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg" alt="Node JS" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Node JS</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Proficient in using Node JS for developing fast and scalable server-side applications.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1400" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/ExpressJS-Dark.svg" alt="Express JS" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Express JS</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Experienced in building robust web applications and APIs using Express JS.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1600" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PostgreSQL-Dark.svg" alt="SQL" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">SQL</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Skilled in writing complex SQL queries for data manipulation and retrieval.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1800" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PostgreSQL-Dark.svg" alt="PostgreSQL" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">PostgreSQL</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Experienced with PostgreSQL for reliable and scalable relational database management.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="2000" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Prisma.svg" alt="Prisma" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Prisma</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Proficient with Prisma ORM for type-safe database access and migrations.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="2200" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MongoDB.svg" alt="Mongo DB" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Mongo DB</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Proficient in using MongoDB for scalable, flexible, and efficient database management.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="2400" data-aos="fade-up">
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MongoDB.svg" alt="Mongoose" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Mongoose</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Skilled in using Mongoose for seamless MongoDB integration with schema-based data modeling.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="2600" data-aos="fade-up">
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Redis-Dark.svg" alt="Redis" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Redis</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Experienced in using Redis for high-performance caching, session storage, and real-time data handling.
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>

          <Timeline>
            <TimelineItem data-aos-duration="800" data-aos="fade-up" className="ml-2">
              <TimelineConnector />
              <TimelineHeader className="pb-10">
                <TimelineIcon className="p-0">
                  <div className="w-5 h-5 rounded-full bg-blue-300"></div>
                </TimelineIcon>
                <Typography variant="h5" color="white" className="text-2xl ml-2">
                  Tools
                </Typography>
              </TimelineHeader>
            </TimelineItem>

            <TimelineItem data-aos-duration="1000" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg" alt="Git & GitHub" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Git & GitHub</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Proficient in Git for version control and GitHub for collaborative development.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1200" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/VSCode-Dark.svg" alt="VS Code" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">VS Code</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  VS Code is a powerful, lightweight code editor with support for extensions, making it ideal for web development across different languages and frameworks.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1400" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Postman.svg" alt="Postman" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Postman</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Postman is an API testing tool that allows developers to send requests and analyze responses, making API integration and debugging easier.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1600" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PostgreSQL-Dark.svg" alt="pgAdmin" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">pgAdmin</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Experienced with pgAdmin for PostgreSQL database administration and management.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="1800" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg" alt="Valentina Studio" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Valentina Studio</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Skilled in using Valentina Studio for database design, management, and query execution.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="2000" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Netlify-Dark.svg" alt="Netlify" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Netlify</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Netlify is a platform for deploying static sites and web applications, offering continuous integration and automated deployments from Git repositories.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="2200" data-aos="fade-up">
              <TimelineConnector />
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vercel-Dark.svg" alt="Vercel" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">Vercel</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Vercel is a platform for deploying frontend and backend applications, providing seamless integration with Git repositories for continuous deployment, optimized performance, and serverless functions support.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="2400" data-aos="fade-up">
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MongoDB.svg" alt="MongoDB Atlas" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">MongoDB Atlas</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  MongoDB Atlas is a cloud-based database service that simplifies MongoDB deployments, providing automatic scaling, backups, and monitoring.
                </Typography>
              </TimelineBody>
            </TimelineItem>

            <TimelineItem data-aos-duration="2600" data-aos="fade-up">
              <TimelineHeader>
                <TimelineIcon className="p-0">
                  <Avatar size="sm" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/AWS-Dark.svg" alt="AWS" withBorder />
                </TimelineIcon>
                <Typography variant="h5" color="white">AWS</Typography>
              </TimelineHeader>
              <TimelineBody className="pb-8">
                <Typography className="font-normal text-gray-400">
                  Familiar with AWS services for deploying, scaling, and managing modern cloud-based applications.
                </Typography>
              </TimelineBody>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Skills;

