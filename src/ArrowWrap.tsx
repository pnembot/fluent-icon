import React, { SVGProps } from "react";

export function ArrowWrap(props: SVGProps<SVGSVGElement>) {
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
        d="M14 4a3 3 0 1 1 0 6H6a2 2 0 1 0 0 4h10.293l-.647-.646a.5.5 0 0 1 .708-.708l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708-.708l.647-.646H6a3 3 0 1 1 0-6h8a2 2 0 1 0 0-4H3.5a.5.5 0 0 1 0-1H14Z"
      />
    </svg>
  );
}
export default ArrowWrap;