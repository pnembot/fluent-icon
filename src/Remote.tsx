import React, { SVGProps } from "react";

export function Remote(props: SVGProps<SVGSVGElement>) {
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
        d="M17.146 14.854a.5.5 0 0 0 .708-.708L12.207 8.5l5.647-5.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 0 .708l6 6ZM2.854 5.146a.5.5 0 1 0-.708.708L7.793 11.5l-5.647 5.646a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708l-6-6Z"
      />
    </svg>
  );
}
export default Remote;
