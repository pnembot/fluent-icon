import type { SVGProps } from "react";

export function TableFreezeColumnAndRowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V12h4V8H4V5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5v9a1.5 1.5 0 0 1-1.5 1.5H12v-3H8v4h6.5a2.5 2.5 0 0 0 2.5-2.5v-9Zm-14 9V13h4v4H5.5A2.5 2.5 0 0 1 3 14.5ZM8 8v4h4V8H8Z"
      />
    </svg>
  );
}
export default TableFreezeColumnAndRowFilled;
