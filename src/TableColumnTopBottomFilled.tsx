import type { SVGProps } from "react";

export function TableColumnTopBottomFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Zm0-5V8h4v4h-4Zm-1 0H8V8h4v4Zm-4 4h4v1H8v-1Zm-1-4V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4ZM8 4h4V3H8v1ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Z"
      />
    </svg>
  );
}
export default TableColumnTopBottomFilled;
