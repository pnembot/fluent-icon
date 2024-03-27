import type { SVGProps } from "react";

export function CircleOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m15.292 16l1.854 1.854a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708l1.855 1.854A8 8 0 0 0 15.293 16ZM18 10c0 1.667-.51 3.215-1.382 4.496L5.504 3.382A8 8 0 0 1 18 10Z"
      />
    </svg>
  );
}
export default CircleOffFilled;
