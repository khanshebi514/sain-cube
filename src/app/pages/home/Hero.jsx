import Button from "@/app/ui/Button";
import { PiArrowCircleUpRightThin } from "react-icons/pi";

export default function Hero() {
  return (
    <section className="bg-[#1d1d1d]">
      <div
        className=""
        style={{
          background: "url('/bg-image.png')",
        }}
      >
        <div className="container">
          <div className="mt-[35%] md:mt-[13%] flex justify-center">
            <div className="lg:w-[1069px] xl:w-full flex items-center flex-col gap-10 w-full">
              <div className="bg-[#2fec7e] rounded-lg p-2 w-fit">
                <span className="text-base md:text-[18px] lg:text-[20px] font-[500]">
                  DEVSHAPPERS: AI Solutions for Digital Realm
                </span>
              </div>

              <div>
                <h1 className="title text-center text-white">
                  Smart Artificial Intelligence Networks Center For Ubiqutous
                  Engineering
                </h1>
              </div>

              <div className="w-full lg:w-[1000px]">
                <p className="paragraph text-center text-white">
                  DEVSHAPPERS combines innovation and technology to deliver
                  tailored software solutions. We specialize in web development,
                  mobile app development, e-commerce, and cloud solutions to
                  help businesses thrive. Our expert team also offers UI/UX
                  design, software maintenance, and API development for seamless
                  integrations. From artificial intelligence and blockchain
                  development to cybersecurity and SEO services, we provide
                  advanced solutions to drive growth and secure your digital
                  presence. Let DEVSHAPPERS help you unlock new opportunities
                  and stay ahead of the competition.
                </p>
              </div>

              <div className="flex justify-center items-center gap-10">
                <Button btnText={"Free Consultancy"} href="/" anchor />
                <a
                  className="text-white flex justify-center items-center gap-3 hover:text-primary"
                  href="/"
                >
                  <span className="">
                    <PiArrowCircleUpRightThin
                      size={50}
                      className="font-light hover:rotate-45 transition-all duration-500"
                    />
                  </span>
                  <span>Explore More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[100px]">
          <marquee width="100%" direction="left" height="200px">
            <h1 className="text-[70px] md:text-[98px] opacity-5 font-[900] text-white">
              Smart Artificial Intelligence Networks Center For Ubiqutous
              Engineering
            </h1>
          </marquee>
        </div>
      </div>
    </section>
  );
}
