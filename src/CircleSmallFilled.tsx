import type { SVGProps } from "react";

export function CircleSmallFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path fill="currentColor" d="M13 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
    </svg>
  );
}
export default CircleSmallFilled;
