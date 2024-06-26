import type { SVGProps } from "react";

export function TableMoveLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 16.5a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-1 0v13Zm9-4.5H8.415c.057-.162.085-.33.085-.5h1a1.5 1.5 0 0 0 0-3h-1c0-.17-.028-.339-.085-.5H12v4Zm5-7v2h-4V3h2a2 2 0 0 1 2 2Zm-5-2v4H8V3.5a.5.5 0 0 1 .5-.5H12Zm5 9V8h-4v4h4Zm-9 1h4v4H8.5a.5.5 0 0 1-.5-.5V13Zm9 0v2a2 2 0 0 1-2 2h-2v-4h4ZM7.354 8.854a.5.5 0 1 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708l-.647-.646H9.5a.5.5 0 0 0 0-1H6.707l.647-.646Z"
      />
    </svg>
  );
}
export default TableMoveLeftFilled;
