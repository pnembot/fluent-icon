import type { SVGProps } from "react";

export function TableCheckerFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm5 5H8v4h4V8Zm1 5h4v1.5a2.5 2.5 0 0 1-2.5 2.5H13v-4ZM8 4h6.5A1.5 1.5 0 0 1 16 5.5V12h1V5.5A2.5 2.5 0 0 0 14.5 3H8v1ZM5.5 16H12v1H5.5A2.5 2.5 0 0 1 3 14.5V8h1v6.5A1.5 1.5 0 0 0 5.5 16Z"
      />
    </svg>
  );
}
export default TableCheckerFilled;
