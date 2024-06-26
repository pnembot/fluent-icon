import type { SVGProps } from "react";

export function ImageBorder(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.5 7.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM6 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm0 1h8v7.782l-2.802-2.788a1.7 1.7 0 0 0-2.396 0L6 13.782V6Zm4.493 5.703L12.802 14H7.198l2.309-2.297a.7.7 0 0 1 .986 0ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
      />
    </svg>
  );
}
export default ImageBorder;
