import type { SVGProps } from "react";

export function MegaphoneOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l3.335 3.334l-2.367.63A1.5 1.5 0 0 0 2 8.269v2.511a1.5 1.5 0 0 0 1.026 1.423L5 12.86v.89a3.25 3.25 0 0 0 6.27 1.2l4.46 1.487l1.416 1.417a.5.5 0 0 0 .708-.708l-15-15ZM6 13.194l4.32 1.44A2.251 2.251 0 0 1 6 13.75v-.556Zm12 1.919c0 .227-.05.44-.137.629L7.713 5.592l8.4-2.24A1.5 1.5 0 0 1 18 4.802v10.31Z"
      />
    </svg>
  );
}
export default MegaphoneOffFilled;
