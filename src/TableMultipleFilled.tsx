import type { SVGProps } from "react";

export function TableMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.001 13.5a3.5 3.5 0 0 1-3.5 3.5H5.672c.773.625 1.757 1 2.829 1h5a4.5 4.5 0 0 0 4.5-4.5v-5a4.481 4.481 0 0 0-1-2.829v7.83ZM4.501 16H6v-4H2v1.5A2.5 2.5 0 0 0 4.5 16ZM6 7v4H2V7h4Zm5 4H7V7h4v4Zm-4 1h4v4H7v-4Zm5-5v4h4V7h-4Zm0 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H12v-4ZM2 6h4V2H4.5A2.5 2.5 0 0 0 2 4.5V6Zm5 0V2h4v4H7Zm5 0V2h1.5A2.5 2.5 0 0 1 16 4.5V6h-4Z"
      />
    </svg>
  );
}
export default TableMultipleFilled;
