import React, { SVGProps } from "react";

export function MyLocationFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm.75-10.25a.75.75 0 0 0-1.5 0v1.296A6.003 6.003 0 0 0 4.046 9.25H2.75a.75.75 0 0 0 0 1.5h1.296a6.003 6.003 0 0 0 5.204 5.204v1.296a.75.75 0 0 0 1.5 0v-1.296a6.003 6.003 0 0 0 5.204-5.204h1.296a.75.75 0 0 0 0-1.5h-1.296a6.003 6.003 0 0 0-5.204-5.204V2.75ZM10 14.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Z"
      />
    </svg>
  );
}
export default MyLocationFilled;
