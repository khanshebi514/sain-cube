export default function AboutLayout({ heading, description, children, background }) {
  return (
    <div className=" py-20 "
    style={{
      background:background
    }}>
      <div className="max-w-[1200px] m-auto">
        <div>
          <h1 className="title text-gradient text-transparent bg-clip-text mb-7">{heading}</h1>
          {description}
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
