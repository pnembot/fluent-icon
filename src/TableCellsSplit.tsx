import type { SVGProps } from "react";

export function TableCellsSplit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 8v4H9V8h1Zm7-2.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9Zm-13 9V14h5v2H5.5l-.144-.007A1.5 1.5 0 0 1 4 14.5ZM9 4l-.007 2h-5L4 5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H9Zm.993 2L10 4h4.5l.145.007A1.5 1.5 0 0 1 16 5.5l-.007.5h-6ZM16 13H4l-.007-6h12L16 13Zm0 1.5l-.007.145A1.5 1.5 0 0 1 14.5 16H10v-2h6v.5Z"
      />
    </svg>
  );
}
export default TableCellsSplit;
