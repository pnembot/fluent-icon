import type { SVGProps } from "react";

export function SpacebarFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 7.75a.75.75 0 0 1 .75.75v2h13v-2a.75.75 0 0 1 1.5 0v2a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 10.5v-2a.75.75 0 0 1 .75-.75Z"
      />
    </svg>
  );
}
export default SpacebarFilled;
