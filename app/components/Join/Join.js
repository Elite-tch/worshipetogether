import Link from "next/link"
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';
export default function Join(){
    return(
<div className=" my-16">
   <div className="flex flex-col justify-center items-center w-[90%] mx-aut0">
   <h6>our mission & vision</h6>
<h2>celebrate with us</h2>
<p className="text-center">Celebrate with us in a vibrant and joyful atmosphere. Together, we mark special moments, share love, and create lasting memories.</p>
<Link className="flex items-center gap-3 mt-4" href='/about'>Read more  <FaArrowRight size={10} /> </Link>

   </div>
   <div className="bg-[#F5F2F0] w-full h-screen mt-14 py-14">
<div className="w-[90%] mx-auto"><h6>watch and listen</h6>
<h2>the benefit of joining our church</h2>
</div>
<div className="flex justify-center items-center gap-8">
    <div className="relative ">
        <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1735277248/fashion-man-love-people-5875438_znixx4.png' width={350} height={300} alt='' />
        <div className="absolute bottom-0 left-0  text-white bg-black bg-opacity-50 px-2 pt-[80%] w-[100%] h-[100%]">
            <h6 className="w-[90%] text-left">Watch and Listen to Our Sermons</h6>  
            <p className="w-[90%]">Watch and listen to sermons anytime, anywhere, at your convenience.</p>
        </div>
    </div>
    <div className="relative">
        <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1735277238/a-statue-holding-a-holy-book-5613134_wlg6xo.png' width={350} height={300} alt='' />   
        <div className="absolute bottom-0 left-0 text-white bg-black bg-opacity-50 px-2 pt-[100%] w-[100%] h-[100%]">
            <h6 className="w-[90%] text-left"> Engage with Our Messages</h6>  
        </div>
    </div>
    <div className="relative">
        <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1735277269/man-people-woman-connection-6276711_jctdc0.png' width={350} height={300} alt='' />  
        <div className="absolute bottom-0 left-0 text-white bg-black bg-opacity-50 pt-[100%] px-2 w-[100%] h-[100%]">
            <h6 className="w-[90%] text-left">Stay Connected to the Word </h6>     
        </div>
    </div>
    <div className="relative">
        <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1735277294/woman-in-blue-tank-top-and-man-in-red-shirt-painting-3795022_fw8ml5.png'  width={350} height={300} alt='' />  
        <div className="absolute bottom-0 left-0 text-white bg-black bg-opacity-50 pt-[100%] px-2 w-[100%] h-[100%]">
            <h6 className="w-[90%] text-left bottom-0">Explore Our Sermons</h6>    
        </div>
    </div>
</div>

   </div>
   </div>


    )
}