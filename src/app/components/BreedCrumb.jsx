import Image from "next/image";
import BreedText from "../ui/BreedText";

export default function BreedCrumb() {
  return (
    <section className="bg-[#22262a]">
      <div className="container py-10">
        <div className="grid grid-cols-3">
          <div>
            <Image src={'/img1.png'} width={200} height={300} alt="" className="rounded-full"/>
          </div>
          <div>
            <BreedText/>
          </div>
          <div>
            <Image src={'/img2.png'} width={250} height={300} alt="" className="rounded-t-full"/>
          </div>
        </div>
      </div>
    </section>
  )
}
