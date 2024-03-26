import React, { SVGProps } from "react";

export function CodeFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M12.937 4.052a.75.75 0 0 0-1.373-.604l-5.5 12.5a.75.75 0 1 0 1.372.604l5.5-12.5Zm1.356 9.793a.75.75 0 0 1-.137-1.052L16.303 10l-2.148-2.793a.75.75 0 0 1 1.188-.914l2.5 3.25a.75.75 0 0 1 0 .915l-2.5 3.25a.75.75 0 0 1-1.051.137Zm-8.586-7.69a.75.75 0 0 1 .137 1.053L3.696 10l2.148 2.793a.75.75 0 1 1-1.188.915l-2.5-3.25a.75.75 0 0 1 0-.915l2.5-3.25a.75.75 0 0 1 1.051-.137Z"
      />
    </svg>
  );
}
export default CodeFilled;
