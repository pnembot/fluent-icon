import type { SVGProps } from "react";

export function Table(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9Zm-13 9V13h3v3H5.5l-.144-.007A1.5 1.5 0 0 1 4 14.5Zm8-1.5v3H8v-3h4Zm2.5 3H13v-3h3v1.5l-.007.145A1.5 1.5 0 0 1 14.5 16ZM12 8v4H8V8h4Zm1 0h3v4h-3V8Zm-1-4v3H8V4h4Zm1 0h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM7 4v3H4V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7Zm0 4v4H4V8h3Z"
      />
    </svg>
  );
}
export default Table;
