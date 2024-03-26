import React, { SVGProps } from "react";

export function SlideMultipleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a4 4 0 0 0-4 4v5a2 2 0 0 0 2 2V8a3 3 0 0 1 3-3h8a2 2 0 0 0-2-2H6Zm1 3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H7Z"
      />
    </svg>
  );
}
export default SlideMultipleFilled;
