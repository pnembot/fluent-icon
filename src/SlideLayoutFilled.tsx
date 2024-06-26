import type { SVGProps } from "react";

export function SlideLayoutFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 7h9a.5.5 0 0 1 .5.5V9H5V7.5a.5.5 0 0 1 .5-.5ZM7 10v3H5.5a.5.5 0 0 1-.5-.5V10h2Zm7.5 3H8v-3h7v2.5a.5.5 0 0 1-.5.5Zm-10-9A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 15.5 4h-11Zm10 10h-9A1.5 1.5 0 0 1 4 12.5v-5A1.5 1.5 0 0 1 5.5 6h9A1.5 1.5 0 0 1 16 7.5v5a1.5 1.5 0 0 1-1.5 1.5Z"
      />
    </svg>
  );
}
export default SlideLayoutFilled;
