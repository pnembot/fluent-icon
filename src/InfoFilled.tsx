import React, { SVGProps } from "react";

export function InfoFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0ZM9.508 8.91a.5.5 0 0 1 .984 0L10.5 9v4.502l-.008.09a.5.5 0 0 1-.984 0l-.008-.09V9l.008-.09ZM9.25 6.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0Z"
      />
    </svg>
  );
}
export default InfoFilled;
