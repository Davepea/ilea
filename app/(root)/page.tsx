import AnimatedTitle2 from "@/components/AnimatedTitle2";
import FeaturedDrop from "@/components/FeaturedDrop";
import Hero from "@/components/Hero";
import IdentityWall from "@/components/IdentityWall";
import JoinTheMovement from "@/components/JoinTheMovement";
import Image from "next/image";
import ShopByVibe from "@/components/ShopByVibe";
import Cursor from "@/components/Cursor";


export default async function Home() {
  


  return (
   <>
     
      <main>
        <Hero/>

        <section className="py-30 md:px-20 px-6">
       
          <div className=" grid  gap-10 justify-center place-items-center">
            <div className="max-w-[750px]">
            
            <AnimatedTitle2 text="Built to Stand Out.
            Made to Be You." className=" xl:!text-9xl !text-7xl " />

            <p>
            We’re not here to tell you what fashion is, we’re here to help you tell your story.
              Born from the streets and fueled by self-expression, our brand is for those who lead with authenticity. Every piece we create is an anthem. A mirror. A megaphone for your truth.

              We believe in unfiltered identity. In style that speaks without words.
              So whether you’re loud with color or quiet in the shadows—shine your way.
            </p>
            </div>
            <div className="flex items-center justify-center">
              {/* <div className="md:h-[500px] md:w-[400px] overflow-hidden rounded-[10px]">
              <Image src="/img/paparazzi photoshoot 2x9.jpg" width={500} height={500} alt="skdksjdjk" className="hue-rotate- w-full object-cover h-full"/>

              </div> */}
            </div>
          </div>
        </section>
        <section className="">
          <div className="">
            {/* <AnimatedTitle2 text="This Season’s Drop: The “Unfiltered” Series" /> */}
          
          </div>

          <section className="grid md:grid-cols-2 grid-cols-1 md:px-20 md:pb-20 ">
                <FeaturedDrop/>
                <div>
                  <div className='bg-[#FD5E53] w-full md:block hidden md:h-[100vh] h-[70vh] rounded-br-[10px] rounded-tr-[10px] overflow-hidden'>
                      <div className="h-full overflow-hidden">
                        <Image
                        src="https://i.pinimg.com/736x/40/9b/4d/409b4ddeb66441335d24458543443d9a.jpg"
                        alt='product'
                        width={900}
                        height={900}
                        className="h-full w-full object-cover object-top"
                      />
                      </div>
                    </div>

                </div>
          </section>      
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
      </main>
          
      
  


 
   </>
  );
}
