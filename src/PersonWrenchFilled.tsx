import React, { SVGProps } from "react";

export function PersonWrenchFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm5.226 5H5.01A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797c.811.517 1.801.861 2.89 1.045a2.504 2.504 0 0 1 .71-2.123l2.317-2.317A4.54 4.54 0 0 1 11.226 11Zm4.666-1.976c.366.042.471.48.21.742l-.975.975a1.507 1.507 0 1 0 2.132 2.132l.975-.975c.261-.261.7-.156.742.21a3.518 3.518 0 0 1-4.676 3.723l-2.726 2.727a1.507 1.507 0 1 1-2.132-2.132l2.726-2.726a3.518 3.518 0 0 1 3.724-4.676Z"
      />
    </svg>
  );
}
export default PersonWrenchFilled;
