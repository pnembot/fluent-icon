import type { SVGProps } from "react";

export function RealEstate(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 2A1.5 1.5 0 0 0 2 3.5v13.75c0 .414.336.75.75.75h1.5a.75.75 0 0 0 .75-.75v-2.014A2.99 2.99 0 0 0 7 16h7a3 3 0 0 0 3-3V6l-.003-.084A1.5 1.5 0 0 0 16.5 3H4.915A1.5 1.5 0 0 0 3.5 2ZM16 6v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h11Zm.5-1H4v12H3V3.5a.5.5 0 0 1 1 0V4h12.5a.5.5 0 0 1 0 1Zm-9 5.453v2.551a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-2.55a1 1 0 0 0-.336-.748l-2.332-2.071a.5.5 0 0 0-.664 0l-2.332 2.07a1 1 0 0 0-.336.748Z"
      />
    </svg>
  );
}
export default RealEstate;
