import { MdLocationOn, MdAccessTime } from "react-icons/md";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';
export default function Sermons(){

    return(

        <div className="w-[90%] mx-auto">
<h6>upcoming sermons</h6>
<h2>join us and become part of something great</h2>

<div className="flex  mt-8">
<div className=" bg-[#FFF5EB] p-8 flex gap-6 ">
<div>
<h6 className="text-left text-[#DC9853]">upcoming event</h6>
<h4>WATCH AND LISTEN TO OUR SERMONS</h4>
<p><b className="font-semibold"> Watch and listen to our sermons</b> for inspiring messages that uplift your spirit and guide your faith.</p>

<div className="flex gap-3 py-4">
<MdAccessTime size={20} />
<p>Friday 23:39 IST <br/>Saturday 11:20 ISD</p>
</div>
<div className="flex gap-3">
< MdLocationOn size={20} />
<p>No 233 Main St. New York, <br/>United States</p>
</div>
<button className="bg-black hover:bg-[#F5F2F0] text-[#DC9853] mt-6 px-6 py-2 rounded-md">Register</button>
</div>
<span className="text-xl"><b className="font-bold">20</b> <br/> July</span>

</div>
<img src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1735277232/a-man-and-woman-wearing-angel-costumes-8513040_ceb8ko.png ' className="w-[60%]"/> 

</div>
<div className="flex justify-end mt-4">
    <Link href='/' className="flex items-center gap-2 hover:underline">View all Sermons <FaArrowRight size={10}/></Link>
</div>

        </div>
    )
}