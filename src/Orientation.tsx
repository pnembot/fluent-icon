import React, { SVGProps } from "react";

export function Orientation(props: SVGProps<SVGSVGElement>) {
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
        d="M3.25 5a.25.25 0 0 0-.25.25v.25a.5.5 0 0 1-1 0v-.25C2 4.56 2.56 4 3.25 4h.25a.5.5 0 0 1 0 1h-.25ZM5 4.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5Zm3 0a.5.5 0 0 1 .5-.5h.25C9.44 4 10 4.56 10 5.25v.25a.5.5 0 0 1-1 0v-.25A.25.25 0 0 0 8.75 5H8.5a.5.5 0 0 1-.5-.5Zm6.854 1.354l-.153.152A3.5 3.5 0 0 1 14.5 13a.5.5 0 0 1 0-1a2.5 2.5 0 0 0 .216-4.99l.138.136a.5.5 0 0 1-.708.708l-1-1a.5.5 0 0 1 0-.708l1-1a.5.5 0 0 1 .708.708ZM2 10.5A1.5 1.5 0 0 1 3.5 9h8a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 14.5v-4Zm1.5-.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-8Zm6-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5ZM3 7.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Z"
      />
    </svg>
  );
}
export default Orientation;
