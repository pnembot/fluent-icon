import type { SVGProps } from "react";

export function TagOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M2.854 2.146a.5.5 0 1 0-.708.708l3.642 3.64l-2.766 2.76a2 2 0 0 0-.002 2.83l4.949 4.948a2 2 0 0 0 2.828 0l2.764-2.764l3.585 3.586a.5.5 0 0 0 .708-.708l-15-15Zm14.574 8.255l-2.453 2.453l-7.771-7.771l2.5-2.494a2 2 0 0 1 1.425-.584l4.89.032a2 2 0 0 1 1.988 1.997l.007 4.95a2 2 0 0 1-.586 1.417ZM14 7.001a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default TagOffFilled;
