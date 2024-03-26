import React, { SVGProps } from "react";

export function Checkbox1(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a2.99 2.99 0 0 0 2-.764v-.821a1.499 1.499 0 0 1-.667.076c-.354.316-.82.509-1.333.509H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5.75l.6-.45c.124-.093.259-.164.4-.214V6a3 3 0 0 0-3-3H6Zm7.854 4.854a.5.5 0 0 0-.708-.708L8.5 11.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5Zm3.87 4.199A.5.5 0 0 1 18 12.5v5a.5.5 0 0 1-1 0v-4l-1.2.9a.5.5 0 0 1-.6-.8l2-1.5a.5.5 0 0 1 .524-.047Z"
      />
    </svg>
  );
}
export default Checkbox1;
