import React, { SVGProps } from "react";

export function PersonStanding(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9.342 4.535c.255-.365.408-.807.408-1.285C9.75 2.009 8.74 1 7.5 1a2.253 2.253 0 0 0-2.25 2.25c0 .478.152.92.408 1.285A2 2 0 0 0 4 6.5v3c0 .551.448 1 1 1v3c0 .827.673 1.5 1.5 1.5h2c.827 0 1.5-.673 1.5-1.5v-3c.552 0 1-.449 1-1v-3c0-.986-.718-1.802-1.658-1.965ZM7.5 2c.689 0 1.25.561 1.25 1.25S8.189 4.5 7.5 4.5s-1.25-.561-1.25-1.25S6.811 2 7.5 2ZM10 9.5H9v4a.5.5 0 0 1-.5.5H8v-3a.5.5 0 0 0-1 0v3h-.5a.5.5 0 0 1-.5-.5v-4H5v-3c0-.551.448-1 1-1h3c.552 0 1 .449 1 1v3Z"
      />
    </svg>
  );
}
export default PersonStanding;
