import AnimatedTitle2 from "@/components/AnimatedTitle2";
import FeaturedDrop from "@/components/FeaturedDrop";
import Hero from "@/components/Hero";
import IdentityWall from "@/components/IdentityWall";
import JoinTheMovement from "@/components/JoinTheMovement";
import ShopByVibe from "@/components/ShopByVibe";
import Image from "next/image";

export default async function Home() {


  return (
   <>
    <Hero/>

    <section className="py-30 md:px-20 ">
      <div className=" grid md:grid-cols-2 gap-10 place-items-center">
        <div>
        
         <AnimatedTitle2 text="Built to Stand Out.
        Made to Be You." className="" />

        <p>
        We’re not here to tell you what fashion is, we’re here to help you tell your story.
          Born from the streets and fueled by self-expression, our brand is for those who lead with authenticity. Every piece we create is an anthem. A mirror. A megaphone for your truth.

          We believe in unfiltered identity. In style that speaks without words.
          So whether you’re loud with color or quiet in the shadows—shine your way.
        </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="h-[500px] w-[400px] overflow-hidden rounded-[10px]">
          <Image src="/img/paparazzi photoshoot 2x9.jpg" width={500} height={500} alt="skdksjdjk" className="hue-rotate- w-full object-cover h-full"/>

          </div>
        </div>
      </div>
    </section>
    <section className="">
      <div className="">
        {/* <AnimatedTitle2 text="This Season’s Drop: The “Unfiltered” Series" /> */}
       
      </div>

      <FeaturedDrop/>
      {/* <div className="grid grid-cols-3 h-[500px] gap-1">
        <div className="bg-white"></div>
        <div className="bg-white"></div>
        <div className="bg-white"></div>
      </div> */}
    </section>
    <IdentityWall/>
    <section className="md:px-20">
     <ShopByVibe/>
    </section>
    <JoinTheMovement />


 
   </>
  );
}
