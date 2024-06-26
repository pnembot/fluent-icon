import type { SVGProps } from "react";

export function TableCopy(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 13.5A3.5 3.5 0 0 0 6.5 17h7.829c-.773.625-1.757 1-2.829 1h-5A4.5 4.5 0 0 1 2 13.5v-5c0-1.072.375-2.056 1-2.829v7.83Zm1.732 1.768A2.5 2.5 0 0 1 4 13.5v-9A2.5 2.5 0 0 1 6.5 2h9A2.5 2.5 0 0 1 18 4.5v9a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-1.768-.732ZM17 6V4.5a1.5 1.5 0 0 0-1.356-1.493L15.5 3H14v3h3Zm-4-3H9v3h4V3ZM8 3H6.5a1.5 1.5 0 0 0-1.493 1.356L5 4.5V6h3V3Zm1 4v4h4V7H9Zm-4 4h3V7H5v4Zm4 1v3h4v-3H9Zm-2.5 3H8v-3H5v1.5a1.5 1.5 0 0 0 1.356 1.493L6.5 15Zm7.5-3v3h1.5a1.5 1.5 0 0 0 1.493-1.356L17 13.5V12h-3Zm0-5v4h3V7h-3Z"
      />
    </svg>
  );
}
export default TableCopy;
