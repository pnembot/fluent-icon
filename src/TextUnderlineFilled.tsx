import React, { SVGProps } from "react";

export function TextUnderlineFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6.5 3.75a.75.75 0 0 0-1.5 0V9c0 1.367.339 2.736 1.16 3.78c.843 1.07 2.132 1.72 3.84 1.72c1.708 0 2.997-.65 3.84-1.72C14.66 11.736 15 10.367 15 9V3.75a.75.75 0 0 0-1.5 0V9c0 1.143-.286 2.15-.84 2.853C12.129 12.529 11.293 13 10 13s-2.128-.47-2.66-1.147c-.554-.704-.84-1.71-.84-2.853V3.75ZM5.75 15.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"
      />
    </svg>
  );
}
export default TextUnderlineFilled;
