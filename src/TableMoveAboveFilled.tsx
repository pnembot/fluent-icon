import type { SVGProps } from "react";

export function TableMoveAboveFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 3a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM8 12V8.415c.161.057.33.085.5.085v1a1.5 1.5 0 0 0 3 0v-1c.17 0 .338-.028.5-.085V12H8Zm7 5h-2v-4h4v2a2 2 0 0 1-2 2Zm2-5h-4V8h3.5a.5.5 0 0 1 .5.5V12Zm-9 5h4v-4H8v4ZM7 8v4H3V8.5a.5.5 0 0 1 .5-.5H7Zm0 9H5a2 2 0 0 1-2-2v-2h4v4Zm4.146-9.646a.5.5 0 0 0 .708-.708l-1.5-1.5a.5.5 0 0 0-.708 0l-1.5 1.5a.5.5 0 1 0 .708.708l.646-.647V9.5a.5.5 0 0 0 1 0V6.707l.646.647Z"
      />
    </svg>
  );
}
export default TableMoveAboveFilled;
