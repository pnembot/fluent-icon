import type { SVGProps } from "react";

export function TableFreezeColumnAndRow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9ZM4 8v4h3V8H4Zm0 5v1.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16H7v-3H4Zm4-1h4V8H8v4Zm4 4v-3H8v3h4ZM4 5.5V7h9v9h1.5a1.5 1.5 0 0 0 1.493-1.355L16 14.5v-9a1.5 1.5 0 0 0-1.355-1.493L5.5 4a1.5 1.5 0 0 0-1.493 1.356L4 5.5Z"
      />
    </svg>
  );
}
export default TableFreezeColumnAndRow;
