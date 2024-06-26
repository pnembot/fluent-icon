import type { SVGProps } from "react";

export function TableFreezeColumnFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 14.5a1.5 1.5 0 0 1-1.5 1.5H12v-3H8v4h6.5a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3H8v4h4V4h2.5A1.5 1.5 0 0 1 16 5.5v9ZM5.5 3H7v4H3V5.5A2.5 2.5 0 0 1 5.5 3ZM7 12V8H3v4h4Zm5-4H8v4h4V8Zm-9 5h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Z"
      />
    </svg>
  );
}
export default TableFreezeColumnFilled;
