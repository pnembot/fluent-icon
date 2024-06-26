import type { SVGProps } from "react";

export function SwipeRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6a4 4 0 0 1 3.598 2.25H8.437a3 3 0 1 0 0 3.5h1.16A4 4 0 1 1 6 6Zm9.28 7.03l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H5.75a.75.75 0 1 0 0 1.5h9.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06Z"
      />
    </svg>
  );
}
export default SwipeRightFilled;
