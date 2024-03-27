import type { SVGProps } from "react";

export function TableFreezeRowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 4A1.5 1.5 0 0 1 16 5.5V8h-3v4h4V5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V12h4V8H4V5.5A1.5 1.5 0 0 1 5.5 4h9ZM3 14.5V13h4v4H5.5A2.5 2.5 0 0 1 3 14.5Zm9-1.5H8v4h4v-4ZM8 8v4h4V8H8Zm5 9v-4h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13Z"
      />
    </svg>
  );
}
export default TableFreezeRowFilled;
