import type { SVGProps } from "react";

export function ArrowUpRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 3.75A.75.75 0 0 1 8.75 3h7.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 1 1-1.5 0V5.56L4.28 16.78a.75.75 0 0 1-1.06-1.06L14.44 4.5H8.75A.75.75 0 0 1 8 3.75Z"
      />
    </svg>
  );
}
export default ArrowUpRightFilled;
