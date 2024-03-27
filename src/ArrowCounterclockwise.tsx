import type { SVGProps } from "react";

export function ArrowCounterclockwise(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.934 9.05A7 7 0 0 0 4.377 5.83L4.25 6H7.5a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5V2.502a.5.5 0 1 1 1 0v2.207a8 8 0 1 1-1.986 4.775a.5.5 0 1 1 .998.064a7 7 0 1 0 13.922-.496Z"
      />
    </svg>
  );
}
export default ArrowCounterclockwise;
