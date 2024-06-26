import type { SVGProps } from "react";

export function TableSimpleMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 2A2.5 2.5 0 0 0 2 4.5v8A2.5 2.5 0 0 0 4.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 12.5 2h-8ZM14 8H9V3h3.5A1.5 1.5 0 0 1 14 4.5V8ZM8 8H3V4.5A1.5 1.5 0 0 1 4.5 3H8v5ZM3 9h5v5H4.5A1.5 1.5 0 0 1 3 12.5V9Zm6 0h5v3.5a1.5 1.5 0 0 1-1.5 1.5H9V9Zm-1.5 9a2.5 2.5 0 0 1-2.45-2h1.036a1.5 1.5 0 0 0 1.415 1h5.75A3.75 3.75 0 0 0 17 13.25V7.5a1.5 1.5 0 0 0-1-1.415V5.05a2.5 2.5 0 0 1 2 2.45v5.75A4.75 4.75 0 0 1 13.25 18H7.5Z"
      />
    </svg>
  );
}
export default TableSimpleMultiple;
