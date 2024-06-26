import type { SVGProps } from "react";

export function FlowchartFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 4.5A1.5 1.5 0 0 1 4.5 3h2A1.5 1.5 0 0 1 8 4.5v2A1.5 1.5 0 0 1 6.5 8H6v3.84a.999.999 0 0 1 .207.16L8 13.793c.063.063.116.133.16.207H12v-.5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5V15H8.16a1.001 1.001 0 0 1-.16.207L6.207 17a1 1 0 0 1-1.414 0L3 15.207a1 1 0 0 1 0-1.414L4.793 12c.063-.063.133-.117.207-.16V8h-.5A1.5 1.5 0 0 1 3 6.5v-2Z"
      />
    </svg>
  );
}
export default FlowchartFilled;
