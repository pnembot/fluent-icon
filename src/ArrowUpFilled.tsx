import React, { SVGProps } from "react";

export function ArrowUpFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3.201 8.735a.75.75 0 1 0 1.09 1.03l4.955-5.239V17.25a.75.75 0 0 0 1.5 0V4.524l4.957 5.241a.75.75 0 1 0 1.09-1.03l-6.07-6.418a.995.995 0 0 0-.566-.3a.753.753 0 0 0-.328.002a.995.995 0 0 0-.558.298L3.2 8.735Z"
      />
    </svg>
  );
}
export default ArrowUpFilled;
