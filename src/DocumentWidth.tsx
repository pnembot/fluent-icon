import React, { SVGProps } from "react";

export function DocumentWidth(props: SVGProps<SVGSVGElement>) {
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
        d="M3.876 7.423a.5.5 0 0 1-.047.706l-.998.874H5.5a.5.5 0 0 1 0 1H2.83l1 .873a.5.5 0 1 1-.66.753l-2-1.75a.5.5 0 0 1 0-.753l2-1.75a.5.5 0 0 1 .706.047Zm13.293 2.58l-.998.873a.5.5 0 0 0 .658.753l2-1.75a.5.5 0 0 0 0-.753l-2-1.75a.5.5 0 0 0-.658.753l.998.874L14.5 9a.5.5 0 0 0 0 1l2.67.003ZM5 4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5h.02A1.494 1.494 0 0 1 16 6.335V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2.336A1.493 1.493 0 0 1 4.98 7.5H5V4Zm-.371 8.238c.19-.217.306-.473.35-.738H5V16a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-4.5h.02a1.494 1.494 0 0 0 .98 1.165V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.335c.235-.083.453-.226.629-.427Z"
      />
    </svg>
  );
}
export default DocumentWidth;
