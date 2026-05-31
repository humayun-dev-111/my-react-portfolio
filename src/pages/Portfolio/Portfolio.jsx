import { FaExternalLinkSquareAlt } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Portfolio = () => {
    return (
        <div className="container mx-auto px-5 pt-32 pb-20">
            <div className="pt-10 flex gap-20 text-white flex-col">
                <div className="flex gap-12 flex-col lg:flex-row">
                    <div data-aos-duration="1000" data-aos="fade-up" className='w-full lg:w-[30%] overflow-hidden rounded-xl'>
                        <img className="object-cover rounded-xl w-full hover:scale-105 duration-200" src="https://i.postimg.cc/vHvZVsS6/medcamp.jpg" alt="Medcamp Image" />
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className='w-full lg:w-[70%]'>
                        <div className='flex items-center gap-4 flex-col md:flex-row'>
                            <div className="flex items-center gap-5">
                                <h2 className="text-2xl text-center md:text-left font-semibold">Medcamp</h2>
                                <p className='text-lg text-center md:text-left font-medium text-nowrap pt-1'>(Medical Camp Website)</p>
                            </div>
                            <div className='flex text-blue-200 gap-7 ml-7'>
                                <a
                                    href="https://medcamp.netlify.app" target="_blank">
                                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">Live Site <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </a>
                                <a href="https://github.com/programming-hero-web-course1/b9a12-client-side-mdrieadmia.git" target="_blank">
                                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">Client Code <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </a>
                                <a href="https://github.com/programming-hero-web-course1/b9a12-server-side-mdrieadmia.git" target="_blank">
                                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">Server Code <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </a>
                            </div>
                        </div>
                        <p className='text-justify pt-5'>This camp management system features a dashboard for organizers to manage camps and participants, with CRUD operations to create, update, and delete camps. Participants can manage their camp participation and pay fees via the integrated Stripe payment gateway.The project utilizes React for the front-end, ExpressJS and NodeJS for the back-end, and MongoDB for the database. Firebase handles authentication, while Tailwind CSS ensures a responsive UI. JavaScript provides core functionality, and Recharts offers data visualization with insightful charts. This system enhances the experience for organizers and participants with its user-friendly interface and secure payment options.</p>
                        <p className='pt-2 font-semibold' >Technology Used : React, ExpressJS, NodeJS, MongoDB, Firebase, Tailwind, JavaScript, Stripe, Recharts.</p>
                    </div>
                </div>
                <div className="flex gap-12 flex-col lg:flex-row">
                    <div data-aos-duration="1000" data-aos="fade-up" className='w-full lg:w-[30%] overflow-hidden rounded-xl'>
                        <img className="object-cover rounded-xl w-full hover:scale-105 duration-200" src="https://i.postimg.cc/ZR3TKtdn/scribble.jpg" alt="Scribble Image" />
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className='w-full lg:w-[70%]'>
                        <div className='flex items-center flex-col md:flex-row gap-4'>
                            <div className="flex items-center gap-5">
                                <h2 className="text-2xl text-center md:text-left font-semibold">Scribble</h2>
                                <p className='text-lg text-center md:text-left font-medium text-nowrap pt-1'>(Blog Website)</p>
                            </div>
                            <div className='flex text-blue-200 gap-7 ml-10'>
                                <a href="https://scribblebd.netlify.app" target="_blank">
                                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">Live Site <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </a>
                                <a href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-mdrieadmia.git" target="_blank">
                                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">Client Code <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </a>
                                <a href="https://github.com/Porgramming-Hero-web-course/b9a11-server-side-mdrieadmia.git" target="_blank">
                                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">Server Code <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </a>
                            </div>
                        </div>
                        <p className='text-justify pt-5'>Implemented user authentication to secure the website and manage user access effectively. Developed comprehensive CRUD operations, enabling users to create, read, update, and delete data entries seamlessly. Ensured the website features a fully responsive design, providing an optimal viewing experience across various devices and screen sizes. This approach not only enhances security but also improves functionality and user experience, making the platform robust and user-friendly. Through these features, the website delivers a secure, efficient, and accessible interface for all users, ensuring smooth operations and a satisfying user experience on any device.</p>
                        <p className='pt-2 font-semibold' >Technology Used : React, NodeJS, ExpressJS, MongoDB, JavaScript, Firebase, Tailwind, Flowbite.</p>
                    </div>
                </div>
                <div className="flex gap-12 flex-col lg:flex-row">
                    <div data-aos-duration="1000" data-aos="fade-up" className='w-full lg:w-[30%] overflow-hidden rounded-xl'>
                        <img className="object-cover rounded-xl w-full hover:scale-105 duration-200" src="https://i.postimg.cc/RFYQzYHg/travello.jpg" alt="Travello Image" />
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className='w-full lg:w-[70%]'>
                        <div className='flex items-center flex-col md:flex-row gap-4'>
                            <div className="flex items-center gap-5">
                                <h2 className="text-2xl text-center md:text-left font-semibold">Travello</h2>
                                <p className='text-lg text-center md:text-left font-medium text-nowrap pt-1'>(Tours & Travel Website)</p>
                            </div>
                            <div className='flex text-blue-200 gap-7 ml-10'>
                                <a href="https://scribblebd.netlify.app" target="_blank">
                                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">Live Site <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </a>
                                <a href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-mdrieadmia.git" target="_blank">
                                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">Client Code <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </a>
                                <a href="https://github.com/Porgramming-Hero-web-course/b9a11-server-side-mdrieadmia.git" target="_blank">
                                    <p className="inline-flex  items-center hover:text-blue-600 duration-200 text-nowrap">Server Code <FaExternalLinkSquareAlt className="mb-[2px] ml-2" /></p>
                                </a>
                            </div>
                        </div>
                        <p className='text-justify pt-5'>Implemented user authentication to secure the website and manage user access effectively. Developed comprehensive CRUD operations, enabling users to create, read, update, and delete data entries seamlessly. Ensured the website features a fully responsive design, providing an optimal viewing experience across various devices and screen sizes. This approach not only enhances security but also improves functionality and user experience, making the platform robust and user-friendly. Through these features, the website delivers a secure, efficient, and accessible interface for all users, ensuring smooth operations and a satisfying user experience on any device.</p>
                        <p className='pt-2 font-semibold' >Technology Used : React, NodeJS, ExpressJS, MongoDB, JavaScript, Firebase, Tailwind, Flowbite.</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Portfolio;