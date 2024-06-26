import type { SVGProps } from "react";

export function TableChecker(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 5.5V11h1V5.5A2.5 2.5 0 0 0 14.5 3H9v1h5.5A1.5 1.5 0 0 1 16 5.5ZM3 9v5.5A2.5 2.5 0 0 0 5.5 17H11v-1H5.5A1.5 1.5 0 0 1 4 14.5V9H3Zm2.5-6H8v4h5v5h4v2.5a2.5 2.5 0 0 1-2.5 2.5H12v-4H7V8H3V5.5A2.5 2.5 0 0 1 5.5 3Zm9 13a1.5 1.5 0 0 0 1.493-1.355L16 14.5V13h-3v3h1.5ZM12 8H8v4h4V8ZM4 7h3V4H5.5a1.5 1.5 0 0 0-1.493 1.356L4 5.5V7Z"
      />
    </svg>
  );
}
export default TableChecker;
