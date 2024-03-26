import React, { SVGProps } from "react";

export function Teddy(props: SVGProps<SVGSVGElement>) {
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
        d="M2 6.5c0 1.149.554 2.168 1.407 2.806A6.082 6.082 0 0 0 3 11.5c0 3.627 3.172 6.5 7 6.5s7-2.873 7-6.5a6.08 6.08 0 0 0-.408-2.195a3.5 3.5 0 1 0-5.307-4.195a7.542 7.542 0 0 0-2.572 0A3.5 3.5 0 0 0 2 6.5ZM5.5 4a2.5 2.5 0 0 1 2.222 1.353c-1.652.528-3.034 1.616-3.868 3.03A2.5 2.5 0 0 1 5.5 4Zm6.777 1.353a2.5 2.5 0 1 1 3.868 3.028c-.834-1.413-2.216-2.5-3.868-3.029ZM10 6c3.352 0 6 2.5 6 5.5c0 1.232-.446 2.38-1.204 3.304A5.498 5.498 0 0 0 10 12a5.498 5.498 0 0 0-4.795 2.805C4.446 13.88 4 12.733 4 11.5C4 8.5 6.648 6 10 6Zm4.058 9.55C12.996 16.449 11.576 17 10 17c-1.575 0-2.994-.552-4.057-1.448a4.513 4.513 0 0 1 2.73-2.353a1.5 1.5 0 0 0 2.655 0a4.513 4.513 0 0 1 2.73 2.352Z"
      />
    </svg>
  );
}
export default Teddy;
