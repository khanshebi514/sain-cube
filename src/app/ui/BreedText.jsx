import { GoDotFill } from "react-icons/go";
export default function BreedText() {
  return (
    <div className="py-10">
      <div className="w-[150px] h-[40px] bg-green-900 flex justify-center">
        <div className="flex justify-around items-center gap-2">
          <GoDotFill className="text-white"/>
           <p className="uppercase text-white text-center">Home</p>
          <GoDotFill className="text-white"/>
        </div>
      </div>
      
      <div>
        <h1 className="text-">For Any Querry</h1>
      </div>
    </div>
  )
}
