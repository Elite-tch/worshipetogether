import Link from "next/link"
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
export default function Footer(){
    return(
        <div className="bg-black text-white py-16 mt-24">
<div className="grid md:grid-cols-4 grid-cols-1 md:gap-0 gap-8 w-[90%] mx-auto">
<div className="text-left capitalize flex flex-col gap-3">
<div className="text-2xl font-bold">
            <Link href="/" className=" flex items-center">
<img src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1735280970/th_txvnrs.jpg' alt="logo" width={43} height={43} className="rounded-full" />
              <span className="text-2xl font-bold uppercase ml-2">
              praise<b className="text-[#FFD2A4]">portal</b>
              </span>
            </Link>
          </div>
       <p className="text-left ">© Copyright praiseportal 2025</p>
       <p className="text-left ">(480) 555-0103</p>
       <p className="text-left ">4517 Washington Ave.</p>
       <p className="text-left ">praiseportal@example.com</p>
</div>

<div className="flex flex-col gap-2 ">
<h6 className="text-left">QuickLinks</h6>
<Link href="/about" className=" text-gray-300 hover:text-white">ABOUT</Link>
<Link href="/sermons" className="text-gray-300 hover:text-white">SERMONS</Link>
<Link href="" className="text-gray-300 hover:text-white">EVENTS</Link>
<Link href="/blog" className="text-gray-300 hover:text-white">BLOG</Link>
</div>
<div className="flex flex-col gap-2">
    <h6 className="text-left">Connect</h6>
    <div className="flex items-center gap-6">
<FaFacebook size={20} className="text-[#FFD2A4]"/>
<FaTwitter size={20} className="text-[#FFD2A4]"/>
<FaLinkedin size={20} className="text-[#FFD2A4]"/>
    </div>
</div>

<div className="flex flex-col gap-3">
    <h4 className="text-left">
    Subscribe to get Latest Updates and News    
    </h4>
    <form className="flex items-center border rounded-lg w-fit shadow-2xl w-[90%]">
<input type=" text" placeholder="Yourmail@gmail.com" className="bg-transparent py-2 px-2 " />
<button className="bg-[#FFD2A4] py-2 px-4 text-black  rounded-r-lg"> SUBSCRIBE</button>

    </form>
</div>

</div>

        </div>
    )
}
