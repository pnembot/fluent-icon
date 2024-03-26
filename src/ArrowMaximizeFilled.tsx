import React, { SVGProps } from "react";

export function ArrowMaximizeFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16 3a1 1 0 0 1 1 1v5.25a.75.75 0 0 1-1.5 0V5.559L5.559 15.5H9.25a.75.75 0 0 1 0 1.5H4a1 1 0 0 1-1-1v-5.25a.75.75 0 0 1 1.5 0v3.689L14.439 4.5H10.75a.75.75 0 0 1 0-1.5H16Z"
      />
    </svg>
  );
}
export default ArrowMaximizeFilled;
