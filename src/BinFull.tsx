import type { SVGProps } from "react";

export function BinFull(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.932 2.248a.5.5 0 0 1-.18.684L4.349 9H8v-.5A1.5 1.5 0 0 1 9.5 7H12v-.5A1.5 1.5 0 0 1 13.5 5h2A1.5 1.5 0 0 1 17 6.5V9h.5a.5.5 0 0 1 .5.5v6a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .248-.432l12-7a.5.5 0 0 1 .684.18ZM16.5 10H3v5.5A1.5 1.5 0 0 0 4.5 17h11a1.5 1.5 0 0 0 1.5-1.5V10h-.499ZM12 9V8H9.5a.5.5 0 0 0-.5.5V9h3Zm1 0h3V6.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V9Z"
      />
    </svg>
  );
}
export default BinFull;
