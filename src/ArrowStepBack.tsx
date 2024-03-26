import React, { SVGProps } from "react";

export function ArrowStepBack(props: SVGProps<SVGSVGElement>) {
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
        d="M7.851 3.146a.5.5 0 0 1 0 .707L4.706 7H10c2.932 0 5.593 1.64 6.936 4.043a.5.5 0 1 1-.872.488C14.894 9.439 12.564 8 10 8H4.707l3.144 3.145a.5.5 0 0 1-.707.707L3.161 7.867a.5.5 0 0 1-.014-.721l3.997-4a.5.5 0 0 1 .707 0ZM8 15a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z"
      />
    </svg>
  );
}
export default ArrowStepBack;
