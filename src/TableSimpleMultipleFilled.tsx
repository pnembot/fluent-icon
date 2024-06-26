import type { SVGProps } from "react";

export function TableSimpleMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 2A2.5 2.5 0 0 0 2 4.5V8h6V2H4.5ZM2 12.5V9h6v6H4.5A2.5 2.5 0 0 1 2 12.5ZM9 15V9h6v3.5a2.5 2.5 0 0 1-2.5 2.5H9Zm6-10.5V8H9V2h3.5A2.5 2.5 0 0 1 15 4.5ZM7.499 18a2.5 2.5 0 0 1-2.45-2h7.45a3.5 3.5 0 0 0 3.5-3.5V5.05a2.5 2.5 0 0 1 2 2.45v5.75a4.75 4.75 0 0 1-4.75 4.75h-5.75Z"
      />
    </svg>
  );
}
export default TableSimpleMultipleFilled;
