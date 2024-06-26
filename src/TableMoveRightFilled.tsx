import type { SVGProps } from "react";

export function TableMoveRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM8 8h3.585c-.057.161-.085.33-.085.5h-1a1.5 1.5 0 1 0 0 3h1c0 .17.028.338.085.5H8V8Zm-5 7v-2h4v4H5a2 2 0 0 1-2-2Zm5 2v-4h4v3.5a.5.5 0 0 1-.5.5H8ZM3 8v4h4V8H3Zm9-1H8V3h3.5a.5.5 0 0 1 .5.5V7ZM3 7V5a2 2 0 0 1 2-2h2v4H3Zm9.646 4.146a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.708.708l.647.646H10.5a.5.5 0 0 0 0 1h2.793l-.647.646Z"
      />
    </svg>
  );
}
export default TableMoveRightFilled;
