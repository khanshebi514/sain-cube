import Link from "next/link";

export default function Button({
  btnText,
  textOnly,
  anchor,
  className,
  ...props
}) {
  let cssClass = `px-[35px] py-[10px] rounded-md text-[16px] font-[600] tracking-[0.03em] capitalize  ${
    textOnly ? "bg-transparent border-2 border-primary text-primary" : "bg-primary"
  }`;
  return anchor ? (
    <Link className={cssClass} {...props}>
      {btnText}
    </Link>
  ) : (
    <button className={cssClass} {...props}>
      {btnText}
    </button>
  );
}
