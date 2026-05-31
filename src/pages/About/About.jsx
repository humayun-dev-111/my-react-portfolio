
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
AOS.init();


const page = () => {
    return (
        <div className='container mx-auto px-5 py-20 min-h-screen flex flex-col justify-center items-center'>
           
            <div className='flex flex-col lg:flex-row justify-between items-center'>
                <div data-aos-duration="1000" data-aos="fade-right" className='w-full lg:w-1/2'>
                    <div className='p-10 w-[70%] rounded-xl bg-transparent flex justify-center items-center flex-col gap-5 text-white'>
                        <div className=''>
                            <div className='bg-gray-800 h-72 w-72 pt-5 rounded-full p-4'>
                                <img className='h-64 w-64 object-cover rounded-full' src="https://i.postimg.cc/hGDMGdxg/my-passport-photo.png" alt="My Image" />
                            </div>
                        </div>
                        <div>
                            <h1 className='font-semibold text-center text-4xl'>MD RIEAD MIA</h1>
                            <p className='font-medium text-center text-xl mt-3'>Web Developer</p>
                        </div>
                    </div>
                </div>
                <div data-aos-duration="1000" data-aos="fade-left" className='w-full lg:w-1/2'>
                    <h2 className='text-3xl font-semibold text-white'>Who I Am?</h2>
                    <p className='font-medium text-white mt-3 text-justify'>I am a highly skilled Frontend Web Developer with expertise in HTML, CSS, Tailwind, JavaScript, and React JS. I have a solid understanding of Node JS, Express JS, and Mongo DB. My experience includes developing dynamic, complex, and interactive user experiences, resulting in measurable success. I excel at creating responsive and user-friendly web applications, leveraging my knowledge to deliver high-quality solutions. My ability to integrate modern technologies ensures seamless and efficient development processes, making me a valuable asset to any development team.</p>
                    <div className='flex gap-3 items-center pt-10'>
                        <p className=' text-white font-semibold text-xl'>Let&apos;s Connect - </p>
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