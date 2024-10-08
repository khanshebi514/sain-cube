import BreedCrumb from "../components/BreedCrumb";
import { ABOUT } from "../constants";
import AboutLayout from "../pages/about/about-layout";
import ServiceCard from "../ui/ServiceCard";

export default function AboutUs() {
  const about = ABOUT;
  return (
    <section className="bg-[#0f0f0f]">
      <div className="mt-[5%]">
        <div className="container">
          <BreedCrumb
            link={"About"}
            heading={"About SAINCUBE"}
            description={
              "SAINCUBE helps companies work smarter and make better decisions using advanced technology."
            }
          />
        </div>

        <AboutLayout heading={about["our-story"].title} description={about["our-story"].description} />

        <AboutLayout heading={about["our-principle"].title} description={about["our-principle"].description} background={'#1e1c22'}>
          <div className="flex justify-center items-center gap-5 flex-wrap mt-10">
            {
              about["our-principle"].components.map((item)=>
              <ServiceCard key={item.key} index={item.key} title={item.title} description={item.description}/>
              )
            }
          </div>
        </AboutLayout>
      </div>
    </section>
  );
}
