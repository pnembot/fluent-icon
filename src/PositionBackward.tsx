import React, { SVGProps } from "react";

export function PositionBackward(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 2A2.5 2.5 0 0 0 2 4.5v6A2.5 2.5 0 0 0 4.5 13H6v-1.707L5.293 12H4.5c-.232 0-.45-.053-.647-.146L6 9.707V9.5c0-.571.137-1.11.38-1.586l-3.234 3.233A1.495 1.495 0 0 1 3 10.5v-.94L9.56 3h.94c.232 0 .45.052.647.146L7.914 6.38A3.485 3.485 0 0 1 9.5 6h.207l2.147-2.147c.094.196.146.415.146.647v.793L11.293 6H13V4.5A2.5 2.5 0 0 0 10.5 2h-6ZM3 4.5A1.5 1.5 0 0 1 4.5 3h.647L3 5.147V4.5Zm0 2.06L6.56 3h1.587L3 8.147V6.56ZM7 9.5A2.5 2.5 0 0 1 9.5 7h6A2.5 2.5 0 0 1 18 9.5v6a2.5 2.5 0 0 1-2.5 2.5h-6A2.5 2.5 0 0 1 7 15.5v-6ZM9.5 8A1.5 1.5 0 0 0 8 9.5v6A1.5 1.5 0 0 0 9.5 17h6a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 15.5 8h-6Z"
      />
    </svg>
  );
}
export default PositionBackward;