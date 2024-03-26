import React, { SVGProps } from "react";

export function TableMoveLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M3.5 17a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Zm4.5-.5v-3.882l.06-.057c.164-.164.282-.356.355-.561H12V8H8.415A1.494 1.494 0 0 0 8 7.382V3.5a.5.5 0 0 1 .5-.5H15a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8.5a.5.5 0 0 1-.5-.5Zm5-.5h2a1 1 0 0 0 1-1v-2h-3v3Zm3-8h-3v4h3V8Zm0-1V5a1 1 0 0 0-1-1h-2v3h3Zm-4 0V4H9v3h3Zm-3 9h3v-3H9v3ZM7.354 8.854a.5.5 0 1 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708l-.647-.646H9.5a.5.5 0 0 0 0-1H6.707l.647-.646Z"
      />
    </svg>
  );
}
export default TableMoveLeft;
