import type { SVGProps } from "react";

export function FluidFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2A1.5 1.5 0 0 1 7 3.5v2.043a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5V3.5ZM8 4h5.5A1.5 1.5 0 0 1 15 5.5V9h-1V5.5a.5.5 0 0 0-.5-.5H8V4ZM5 8v5.5a.5.5 0 0 0 .5.5H9v1H5.5A1.5 1.5 0 0 1 4 13.5V8h1Zm6.504 2a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5h-5Z"
      />
    </svg>
  );
}
export default FluidFilled;
