import { FaLocationDot } from "react-icons/fa6";

export default function IconLink({icon, text}) {
  return (
    <div>
        <div className="flex justify-start items-center gap-2">
            <div>
                {icon}
            </div>
            <div>
                <h3 className="text-[25px] font-[600] text-white">
                    {text}
                </h3>
            </div>
        </div>
    </div>
  )
}
