import type { SVGProps } from "react";

export function TableCellsSplitFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6h7v-.5A2.5 2.5 0 0 0 14.5 3H10v3Zm7 7V7H3v6h14Zm-7-5v4H9V8h1Zm0 9h4.5a2.5 2.5 0 0 0 2.5-2.5V14h-7v3Zm-1-3H3v.5A2.5 2.5 0 0 0 5.5 17H9v-3Zm0-8V3H5.5A2.5 2.5 0 0 0 3 5.5V6h6Z"
      />
    </svg>
  );
}
export default TableCellsSplitFilled;
