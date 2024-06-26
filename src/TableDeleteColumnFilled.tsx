import type { SVGProps } from "react";

export function TableDeleteColumnFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 2.5a.5.5 0 0 0-1 0v4.875c.127.107.244.228.36.348l.14.143l.14-.143c.116-.12.233-.24.36-.348V2.5Zm-1 15v-4.888c.127-.107.244-.228.36-.348l.14-.143l.14.143c.116.12.233.24.36.348V17.5a.5.5 0 0 1-1 0ZM2 3.5a.5.5 0 0 1 .5-.5H4a2 2 0 0 1 2 2v2H2V3.5Zm0 13V13h4v2a2 2 0 0 1-2 2H2.5a.5.5 0 0 1-.5-.5ZM6 8v4H2V8h4Zm12-4.5a.5.5 0 0 0-.5-.5H16a2 2 0 0 0-2 2v2h4V3.5ZM14 13v2a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 .5-.5V13h-4Zm-2.146-4.854a.5.5 0 0 0-.708 0L10 9.293L8.854 8.146a.5.5 0 1 0-.708.708L9.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L10 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L10.707 10l1.147-1.146a.5.5 0 0 0 0-.708ZM18 12V8h-4v4h4Z"
      />
    </svg>
  );
}
export default TableDeleteColumnFilled;
