import type { SVGProps } from "react";

export function TableFreezeRow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 17a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9ZM4 12V8h3v4H4Zm12-5H4V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4h9l.145.007A1.5 1.5 0 0 1 16 5.5V7ZM8 8h4v4H8V8Zm-4 6.5V13h3v3H5.5l-.144-.007A1.5 1.5 0 0 1 4 14.5Zm8-1.5v3H8v-3h4Zm4-5v4h-3V8h3Zm0 5v1.5l-.007.145A1.5 1.5 0 0 1 14.5 16H13v-3h3Z"
      />
    </svg>
  );
}
export default TableFreezeRow;
