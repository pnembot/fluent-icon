import type { SVGProps } from "react";

export function TableAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-6 5V8H3v4h4Zm2.6 0A5.523 5.523 0 0 1 12 9.6V8H8v4h1.6Zm4.9-3c.9 0 1.75.216 2.5.6V8h-4v1.207A5.5 5.5 0 0 1 14.5 9ZM9 14.5a5.5 5.5 0 0 1 .207-1.5H8v4h1.6a5.47 5.47 0 0 1-.6-2.5ZM7 13H3v1.5A2.5 2.5 0 0 0 5.5 17H7v-4Zm5-6V3H8v4h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm12 11.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default TableAddFilled;
