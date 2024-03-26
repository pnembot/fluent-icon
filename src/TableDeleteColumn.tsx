import React, { SVGProps } from "react";

export function TableDeleteColumn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.5 2.5a.5.5 0 0 0-1 0v4.875c.127.107.244.228.36.348l.14.143l.14-.143c.116-.12.233-.24.36-.348V2.5Zm-1 15v-4.888c.127-.107.244-.228.36-.348l.14-.143l.14.143c.116.12.233.24.36.348V17.5a.5.5 0 0 1-1 0ZM2 3.5a.5.5 0 0 1 .5-.5H4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2.5a.5.5 0 0 1 0-1H4a1 1 0 0 0 1-1v-2H2.5a.5.5 0 0 1 0-1H5V8H2.5a.5.5 0 0 1 0-1H5V5a1 1 0 0 0-1-1H2.5a.5.5 0 0 1-.5-.5Zm16 0a.5.5 0 0 0-.5-.5H16a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1.5a.5.5 0 0 0 0-1H16a1 1 0 0 1-1-1v-2h2.5a.5.5 0 0 0 0-1H15V8h2.5a.5.5 0 0 0 0-1H15V5a1 1 0 0 1 1-1h1.5a.5.5 0 0 0 .5-.5Zm-6.146 4.646a.5.5 0 0 0-.708 0L10 9.293L8.854 8.146a.5.5 0 1 0-.708.708L9.293 10l-1.147 1.146a.5.5 0 0 0 .708.708L10 10.707l1.146 1.147a.5.5 0 0 0 .708-.708L10.707 10l1.147-1.146a.5.5 0 0 0 0-.708Z"
      />
    </svg>
  );
}
export default TableDeleteColumn;
