import type { SVGProps } from "react";

export function TableMoveBelow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 16.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1 0-1h13a.5.5 0 0 1 .5.5Zm-.5-4.5h-3.882a1.495 1.495 0 0 0-.618-.415V8H8v3.585a1.495 1.495 0 0 0-.618.415H3.5a.5.5 0 0 1-.5-.5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6.5a.5.5 0 0 1-.5.5ZM16 7V5a1 1 0 0 0-1-1h-2v3h3ZM8 4v3h4V4H8ZM7 4H5a1 1 0 0 0-1 1v2h3V4Zm0 4H4v3h3V8Zm9 3V8h-3v3h3Zm-7.146 1.646a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V10.5a.5.5 0 0 0-1 0v2.793l-.646-.647Z"
      />
    </svg>
  );
}
export default TableMoveBelow;
