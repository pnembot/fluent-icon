import type { SVGProps } from "react";

export function TableMoveAbove(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM3.5 8h3.882A1.52 1.52 0 0 0 8 8.415V12h4V8.415A1.495 1.495 0 0 0 12.618 8H16.5a.5.5 0 0 1 .5.5V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5a.5.5 0 0 1 .5-.5Zm.5 5v2a1 1 0 0 0 1 1h2v-3H4Zm8 3v-3H8v3h4Zm1 0h2a1 1 0 0 0 1-1v-2h-3v3Zm0-4h3V9h-3v3ZM4 9v3h3V9H4Zm7.146-1.646a.5.5 0 0 0 .708-.708l-1.5-1.5a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 1 0 .708.708l.646-.647V9.5a.5.5 0 0 0 1 0V6.707l.646.647Z"
      />
    </svg>
  );
}
export default TableMoveAbove;
