import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { Button } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialIcons from "../../components/SocialIcons/SocialIcons";
AOS.init();

const page = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const fullName = `${firstName} ${lastName}`.trim();
    const phone = e.target.phone.value;
    const subject = e.target.subject.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service configuration is missing.");
      return;
    }

    const templateParams = {
      from_name: fullName,
      from_email: email,
      name: fullName,
      email,
      phone,
      title: subject,
      subject,
      message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success("Message sent successfully");
      e.target.reset();
    } catch (error) {
      console.error(error);
      const errorText =
        error?.text || error?.message || "Message send failed";
      toast.error(errorText);
    }
  };

  return (
    <div className="container mx-auto px-5 text-white min-h-screen pb-20 flex justify-center items-center">
      <div className="flex flex-col gap-10 md:flex-row w-full item-center h-auto justify-center pt-40">
        <div className="flex gap-7 flex-col w-full">
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="flex gap-2 item-center"
          >
            <IoLogoWhatsapp className="mt-1" />
            <p>+8801747477746</p>
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="flex gap-2 item-center"
          >
            <FaEnvelope className="mt-1" />
            <p>humayunkabir506034@gmail.com</p>
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="flex gap-2 item-center"
          >
            <IoCall className="mt-1" />
            <p>+8801747477746</p>
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="flex gap-2 item-center"
          >
            <FaLocationDot className="mt-1" />
            <p>Thakurgaon, Bangladesh</p>
          </div>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            className="flex gap-2 item-center"
          >
            <SocialIcons />
          </div>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
            <input
              data-aos-duration="1000"
              data-aos="fade-up"
              className="block px-3 py-2 w-full rounded-lg bg-gray-800"
              required
              type="text"
              name="firstName"
              placeholder="First Name"
            />
            <input
              data-aos-duration="1000"
              data-aos="fade-up"
              className="block px-3 py-2 w-full rounded-lg bg-gray-800"
              required
              type="text"
              name="lastName"
              placeholder="Last Name"
            />
            <input
              data-aos-duration="1000"
              data-aos="fade-up"
              className="block px-3 py-2 w-full rounded-lg bg-gray-800"
              required
              type="tel"
              name="phone"
              placeholder="Phone Number"
              pattern="^[0-9+()\\-\\s]{7,20}$"
              title="Enter a valid phone number"
            />
            <select
              data-aos-duration="1000"
              data-aos="fade-up"
              className="block px-3 py-2 w-full rounded-lg bg-gray-800"
              required
              name="subject"
              defaultValue=""
            >
              <option value="" disabled>
                Select Subject
              </option>
              <option value="Job Opportunity">Job Opportunity</option>
              <option value="Project Discussion">Project Discussion</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Freelance Work">Freelance Work</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
            <input
              data-aos-duration="1000"
              data-aos="fade-up"
              className="block px-3 py-2 w-full rounded-lg bg-gray-800 col-span-2"
              required
              type="email"
              name="email"
              placeholder="Email Address"
            />
            <textarea
              data-aos-duration="1000"
              data-aos="fade-up"
              className="block px-3 py-2 w-full rounded-lg col-span-2 bg-gray-800"
              required
              name="message"
              placeholder="Your Message"
            />
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="flex col-span-2 justify-center item-center "
            >
              <Button type="submit" variant="gradient" className="normal-case">
                Send
              </Button>
            </div>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default page;
