import type { SVGProps } from "react";

export function TableMoveBelowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 17a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1h13ZM12 8v3.585a1.505 1.505 0 0 0-.5-.085v-1a1.5 1.5 0 0 0-3 0v1c-.17 0-.339.028-.5.085V8h4ZM5 3h2v4H3V5a2 2 0 0 1 2-2ZM3 8h4v4H3.5a.5.5 0 0 1-.5-.5V8Zm9-5H8v4h4V3Zm1 9V8h4v3.5a.5.5 0 0 1-.5.5H13Zm0-9h2a2 2 0 0 1 2 2v2h-4V3Zm-4.146 9.646a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647Z"
      />
    </svg>
  );
}
export default TableMoveBelowFilled;
