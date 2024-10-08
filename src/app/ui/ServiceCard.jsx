import BulletPoint from "./BulletPoint";

export default function ServiceCard({ title, description, index, points }) {
  return (
    <div className="w-full md:max-w-[370px] md:h-[400px] p-5 bg-[#161519] rounded-md">
      <div className="space-y-4">
        <h2 className="font-[700] text-[50px] text-[#1e1c22]">{index}</h2>
        <h2 className="text-[27px] font-[600] text-white capitalize">
          {title}
        </h2>
        <p className="text-14px font-light text-gray-B5 leading-7">
          {description}
        </p>

        <div className="space-y-2 py-3">
          {points
            ? points.map((point, index) => (
                <BulletPoint key={index} point={point} />
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
