import type { SVGProps } from "react";

export function ArrowCircleDown(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m13.354 10.854l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L9.5 12.293V6.5a.5.5 0 0 1 1 0v5.793l2.146-2.147a.5.5 0 0 1 .708.708ZM10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm7-8a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
}
export default ArrowCircleDown;
