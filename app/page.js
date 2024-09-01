import Layout from "@/components/layout/Layout";
import AboutUs4 from "@/components/sections/AboutUs4";
import Contact1 from "@/components/sections/Contact1";
import Cta2 from "@/components/sections/Cta2";
import MainSlider6 from "@/components/sections/MainSlider6";
import MarqueText3 from "@/components/sections/MarqueText3";
import Service6 from "@/components/sections/Service6";

export default function Home() {
  return (
    <>
      <Layout headerStyle={5} footerStyle={5}>
        <MainSlider6 />
        <MarqueText3 />
        {/*<Partner5/>*/}
        <AboutUs4 />
        <Service6 />

        <Cta2 />
        {/*<Feature6 />*/}
        {/*<Team4/>*/}
        {/* <CaseStudies4 /> */}
        {/* <Testimonial5 /> */}
        {/* <Blog6 /> */}
        <Contact1 />
      </Layout>
    </>
  );
}
