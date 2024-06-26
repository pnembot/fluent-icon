import type { SVGProps } from "react";

export function TableFreezeColumn(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 17A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9ZM12 4H8v3h4V4ZM7 4H5.5a1.5 1.5 0 0 0-1.493 1.356L4 5.5V7h3V4Zm1 4v4h4V8H8Zm-4 4h3V8H4v4Zm4 1v3h4v-3H8Zm-2.5 3H7v-3H4v1.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16Zm9-12H13v12h1.5a1.5 1.5 0 0 0 1.493-1.355L16 14.5v-9a1.5 1.5 0 0 0-1.355-1.493L14.5 4Z"
      />
    </svg>
  );
}
export default TableFreezeColumn;
