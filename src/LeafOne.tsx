import React, { SVGProps } from "react";

export function LeafOne(props: SVGProps<SVGSVGElement>) {
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
        d="m11.072 2.458l3.239 3.31A6.03 6.03 0 0 1 10.5 15.994v1.504a.5.5 0 1 1-1 0v-1.504A6.03 6.03 0 0 1 5.69 5.768l3.238-3.31a1.5 1.5 0 0 1 2.144 0ZM10.5 14.99a5.03 5.03 0 0 0 3.096-8.523l-3.239-3.31a.5.5 0 0 0-.714 0l-3.239 3.31A5.03 5.03 0 0 0 9.5 14.99V9.498a.5.5 0 1 1 1 0v5.492Z"
      />
    </svg>
  );
}
export default LeafOne;
