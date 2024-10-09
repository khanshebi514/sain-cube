export default function Input({
  type = "text",
  placeholder,
  icon,
  label,
  ...props
}) {
  return (
    <div className="w-full">
      <label className="text-white text-sm font-semibold">{label}</label>
      <div
        className={`w-full border-[1px] border-gray-700 h-[40px] flex justify-between items-center ${
          label ? "rounded-lg bg-[#202428] mt-2" : " "
        }`}
      >
        <input
          className={`text-gray-600 px-2 py-1 outline-none border-none w-full bg-transparent ${
            label ? "text-white text-sm font-semibold" : " "
          }`}
          placeholder={placeholder}
          type={type}
          {...props}
          
        />
        

        {icon ? (
          <a className="w-[70px] h-full bg-primary text-center flex justify-center items-center cursor-pointer">
            {icon}
          </a>
        ) : null}
      </div>
    </div>
  );
}
