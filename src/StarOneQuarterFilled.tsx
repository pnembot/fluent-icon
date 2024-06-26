import type { SVGProps } from "react";

export function StarOneQuarterFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 5.137L7.174 6.81l-4.317.627a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1.002 1.002 0 0 0 1.038 1.17a1 1 0 0 0 .414-.117L8 16.564V5.137Z"
      />
    </svg>
  );
}
export default StarOneQuarterFilled;
