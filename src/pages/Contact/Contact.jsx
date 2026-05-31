import toast, { Toaster } from 'react-hot-toast';
import { FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser"
import { Button } from "@material-tailwind/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialIcons from "../../components/SocialIcons/SocialIcons";
AOS.init();


const page = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const fullName = firstName + lastName;
        const email = e.target.email.value;
        const message = e.target.message.value;


        const serviceId = "service_g24rgyq";
        const templateId = "template_gufma09";
        const publicKey = "4kmuv4jeUqx4FkAuo";

        const templateParams = {
            from_name: fullName,
            from_email: email,
            to_name: 'Riead',
            message: message
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey).then(
            (respons) => {
                console.log(respons);
                toast.success('Message sent successfully')
            },
            (error) => {
                console.log(error);
                toast.error('Message sent failed')
            },
        );


    }

    return (
        <div className="container mx-auto px-5 text-white min-h-screen pb-20 flex justify-center items-center">
            <div className="flex flex-col gap-10 md:flex-row w-full item-center h-auto justify-center pt-40">
                <div className="flex gap-7 flex-col w-full">
                    <div data-aos-duration="1000" data-aos="fade-up" className="flex gap-2 item-center">
                        <IoLogoWhatsapp className="mt-1" />
                        <p>+8801863-931220</p>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className="flex gap-2 item-center">
                        <FaEnvelope className="mt-1" />
                        <p>mdriead.bd@gmail.com</p>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className="flex gap-2 item-center">
                        <IoCall className="mt-1" />
                        <p>+8801863-931220, +8801567-953483</p>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className="flex gap-2 item-center">
                        <FaLocationDot className="mt-1" />
                        <p>Kondolbag, Zirabo, Ashulia, Savar, Dhaka</p>
                    </div>
                    <div data-aos-duration="1000" data-aos="fade-up" className="flex gap-2 item-center">
                        <SocialIcons />
                    </div>
                </div>
                <div className="w-full">
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
                        <input data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg bg-gray-800" required type="text" name='firstName' placeholder="First Name" />
                        <input data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg bg-gray-800" required type="text" name='lastName' placeholder="Last Name" />
                        <input data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg bg-gray-800" required type="text" name='phone' placeholder="Phone Number" />
                        <input data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg bg-gray-800" required type="text" name='subject' placeholder="Subject" />
                        <input data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg bg-gray-800 col-span-2" required type="email" name='email' placeholder="Email Address" />
                        <textarea data-aos-duration="1000" data-aos="fade-up" className="block px-3 py-2 w-full rounded-lg col-span-2 bg-gray-800" required name='message' placeholder="Your Message" />
                        <div data-aos-duration="1000" data-aos="fade-up" className="flex col-span-2 justify-center item-center ">
                            <Button type="submit" variant="gradient" className="normal-case">Send</Button>
                        </div>
                    </form>
                    <Toaster />
                </div>
            </div>
        </div>
    );
};

export default page;