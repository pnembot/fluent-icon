import type { SVGProps } from "react";

export function TableSearchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="currentColor">
        <path d="M13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Zm0-5V8h4v4h-4Zm-1 0H8.744A4.493 4.493 0 0 0 8 10.671V8h4v4Zm-3.439 3.44l1.56 1.56H12v-4H8.973a4.482 4.482 0 0 1-.411 2.44ZM4.5 9c.925 0 1.785.28 2.5.758V8H3v1.256C3.47 9.09 3.974 9 4.5 9ZM13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Z" />
        <path d="M4.5 17c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 4.5 17Zm0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z" />
      </g>
    </svg>
  );
}
export default TableSearchFilled;
