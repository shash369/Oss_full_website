"use client"
import Hero from "@/components/layout/Hero";
import  Members from '@/components/layout/member'
import Domain from "@/components/layout/Domain";
import OurAlumni from "@/components/layout/Alumni";
import TeckStack from "@/components/layout/TeckStack";
import EventDedline from "@/components/layout/EventDeadline";
import ConnectUs from "@/components/layout/ContactUs";
export default function Home() {
  return (
    <div>
      <EventDedline />
      <Hero />
      <br />
     <div className="sm:p-0 p-9 ">
      <h1 className="text-center p-9 text-6xl text-lime-400 font-bold"> Our Domains</h1>
        <Domain />
     </div>
     {/* <TrippyScroll /> */}
      <Members />
      <OurAlumni />
      <div className="overflow-hidden  max-w-6xl ml-12">
           <TeckStack />
      </div> 
     <div className="p-6">
         <ConnectUs />
     </div>
    </div>
  );
  
}
