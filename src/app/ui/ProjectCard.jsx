import Image from "next/image";

export default function ProjectCard({ title, industry, ImgUrl, video }) {
  return (
    <div className="w-full md:max-w-[390px] h-[360px] bg-[#161519] rounded-md cursor-pointer">
      <div className="w-full">
        <div className="w-full h-[250px]">
          {!video ? (
            <Image
              src={ImgUrl}
              width={390}
              height={250}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <iframe width="100%" height="250" src="https://www.youtube.com/embed/njOrPP7JSvU" title="Demo Video Logistics Box Counting" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          )}
        </div>

        <div className="p-2 mt-2">
          <p className="paragraph text-primary">
            Industry: <span className="text-white">{industry}</span>
          </p>
          <h3 className="text-[20px] font-medium text-white hover:text-primary">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
