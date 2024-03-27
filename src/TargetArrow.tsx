import type { SVGProps } from "react";

export function TargetArrow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.962 5.309a.5.5 0 0 1-.108.545l-2 2A.5.5 0 0 1 15.5 8h-2.793l-1.353 1.353a1.5 1.5 0 1 1-.707-.707L12 7.293V4.5a.5.5 0 0 1 .146-.354l2-2A.5.5 0 0 1 15 2.5V5h2.5a.5.5 0 0 1 .462.309ZM16.293 6H14.5a.5.5 0 0 1-.5-.5V3.707l-1 1V7h2.293l1-1Zm1.314 1.515C17.862 8.297 18 9.133 18 10a8 8 0 1 1-5.515-7.606l-.808.808a7 7 0 1 0 5.121 5.122l.809-.809ZM14.9 9A5 5 0 1 1 11 5.1v1.026A4 4 0 1 0 13.874 9H14.9Z"
      />
    </svg>
  );
}
export default TargetArrow;
