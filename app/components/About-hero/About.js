import Image from "next/image"
export default function AboutSub(){
return(

    <div className="md:w-[90%] w-[95%] mx-auto">
        <h2>love and compassion</h2>
        <p className="md:w-[80%] w-[95%]  mx-auto text-center">Love and compassion guide all we do, creating a welcoming space where everyone feels valued and supported. Through kindness, we aim to reflect love and build stronger connections.</p>
   <div className="flex  justify-center gap-8 mt-14">
   <div data-aos="fade-right">
<Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1735277222/a-bearded-man-praying-5206040_zg61xd.png' alt="" width={200} height={200} />
    
</div>
<div data-aos="zoom-in" className="flex flex-col items-center justify-center gap-3">
<button className="btn2">Read more</button>
<Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1735277261/man-and-woman-reading-book-while-sitting-on-pews-8468470_mjphsl.png' alt="" width={250} height={250} />   

</div>
<div>

<Image data-aos="fade-up" src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1735277279/people-sitting-on-brown-pews-8674151_uw5fi7.png' alt="" width={200} height={200} />   
</div>
    
   </div>
   
    </div>
)

}