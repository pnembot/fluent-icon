import React, { SVGProps } from "react";

export function ArrowTrendingDown(props: SVGProps<SVGSVGElement>) {
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
        d="M17.962 14.691A.5.5 0 0 1 17.5 15h-6a.5.5 0 0 1 0-1h4.793L10.5 8.207l-2.146 2.147a.5.5 0 0 1-.708 0l-5.5-5.5a.5.5 0 1 1 .708-.708L8 9.293l2.146-2.147a.5.5 0 0 1 .708 0L17 13.293V8.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.038.191Z"
      />
    </svg>
  );
}
export default ArrowTrendingDown;
