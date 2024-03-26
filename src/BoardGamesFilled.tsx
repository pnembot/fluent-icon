import React, { SVGProps } from "react";

export function BoardGamesFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.948 5.5h.05a2.5 2.5 0 1 1-1.354 4.602l.45 1.854a1.25 1.25 0 0 1-1.215 1.544h-.763a1.25 1.25 0 0 1-1.214-1.545l.45-1.853a2.483 2.483 0 0 1-1.417.397a2.001 2.001 0 0 0-.7-1.07A3.99 3.99 0 0 0 10.5 8c0-.818-.246-1.578-.667-2.212A2.493 2.493 0 0 1 11.05 5.5a2.508 2.508 0 0 1 0-1a2.5 2.5 0 0 1 4.9 1ZM6.5 5a3 3 0 0 0-2.236 5H4a1 1 0 1 0 0 2h.52c-.372 1.798-1.353 2.836-1.9 3.293c-.346.29-.62.736-.62 1.256C2 17.35 2.65 18 3.451 18H9.55c.8 0 1.45-.65 1.45-1.451c0-.52-.274-.966-.62-1.256c-.547-.457-1.528-1.495-1.9-3.293H9a1 1 0 1 0 0-2h-.264A3 3 0 0 0 6.5 5Z"
      />
    </svg>
  );
}
export default BoardGamesFilled;