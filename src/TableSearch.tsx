import type { SVGProps } from "react";

export function TableSearch(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v3.757a4.499 4.499 0 0 1 1-.23V8h3v1.759a4.485 4.485 0 0 1 1 .913V8h4v4H8.742a4.498 4.498 0 0 1 .23 1H12v3H9.122l1 1H14.5a2.5 2.5 0 0 0 2.5-2.5v-9ZM14.5 16H13v-3h3v1.5l-.007.145A1.5 1.5 0 0 1 14.5 16ZM13 8h3v4h-3V8Zm-1-1H8V4h4v3Zm1-3h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7v3H4Zm-2.616 4.905A3.5 3.5 0 0 0 6.6 16.3l2.543 2.558a.5.5 0 0 0 .707-.708L7.3 15.6a3.5 3.5 0 1 0-5.916-3.695Zm5.194.206a2.5 2.5 0 1 1-4.157 2.778a2.5 2.5 0 0 1 4.157-2.778Z"
      />
    </svg>
  );
}
export default TableSearch;
