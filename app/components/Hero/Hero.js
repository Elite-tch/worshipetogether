import { FaHeart, FaUsers, FaHandsHelping } from 'react-icons/fa';
export default function HeroPage(){
    return (
        <>
        <div className="hero md:pt-[15%] pt-[30%] pb-20">
        <div className="md:w-[60%] w-[80%] pl-[5%]">

        <h6 className="text-gray-300 uppercase text-left">welcome to our church</h6>
<h1 className="text-gray-50 uppercase">Become a part of our community</h1>
<button className="my-4 btn2 capitalize ">Learn more</button>
<p className="w-[70%] mt-3 text-gray-300 md:text-gray-400 flex gap-2"> <span className="bg-[#FFD2A4] mt-2 h-1 w-6 "></span>Join our community and connect with others in faith, love, and support. Together, we grow, serve, and make a difference.</p>
        </div>
        </div>
        <div className="my-16 w-[90%] md:w-[80%] mx-auto">
<h6 className="text-gray-500">A Place to Belong, Believe, and Become</h6>
<h2>a church that's relevant</h2>

<div className='flex items-center justify-center md:flex-row mt-10 flex-col gap-8'>
<div className="bg-[rgba(255,210,164,0.2)] py-6 px-8  border-b-8 border-[#FFD2A4] flex flex-col gap-2 w-[95%] md:w-[80%] h-96">
<div className='bg-[#FFD2A4] p-3 w-fit rounded-full'><FaHeart size={23} className=''/></div> 
    <h4>about us</h4>
    <p>At PraisePortal, we are a Christ-centered community committed to faith, service, and love. Our mission is to inspire spiritual growth, foster meaningful connections, and serve others with compassion. We welcome everyone to join us in worship, fellowship, and making a positive impact in the world. </p>
    </div>

    <div className="bg-[rgba(255,210,164,0.2)] py-6 px-8  border-b-8 border-[#FFD2A4]  flex flex-col gap-2 w-[95%] md:w-[80%] h-96">
    <div className='bg-[#FFD2A4] p-3 w-fit rounded-full'><FaUsers size={23} className=''/></div> 
    <h4>get involved</h4>
    <p>Be part of something greater by getting involved in our ministries and outreach programs. Whether through volunteering, joining small groups, or participating in church events, there’s a place for you to grow, connect, and make a difference. </p>
</div>

<div className="bg-[rgba(255,210,164,0.2)] py-6 px-8  border-b-8 border-[#FFD2A4] flex flex-col gap-2 w-[95%] md:w-[80%] h-96">
<div className='bg-[#FFD2A4] p-3 w-fit rounded-full'><FaHandsHelping  size={23} className=''/></div> 
<h4>giving back</h4> 
<p>Your generosity helps us extend hope and support to those in need. By giving back, you partner with us in spreading God’s love through community outreach, missions, and charitable works. Together, we can make a lasting impact. </p>  
</div>
</div>
        </div>
        
        </>
    )
}