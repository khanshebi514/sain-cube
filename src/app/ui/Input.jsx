
export default function Input({ type = "text", placeholder, icon }) {
  return (
    <div className="w-full border-[1px] border-gray-700 h-[50px] flex justify-between items-center">
      <input
        className="text-gray-600 px-2 py-1 outline-none border-none w-full bg-transparent"
        placeholder={placeholder}
        type={type}
      />

      {icon ? (
        <a className="w-[70px] h-full bg-primary text-center flex justify-center items-center cursor-pointer">{icon}</a>
      ) : null}
    </div>
  );
}
