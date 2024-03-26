import React, { SVGProps } from "react";

export function LeafFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path
          d="M11.072 2.462a1.5 1.5 0 0 0-2.144 0L5.691 5.77a6.03 6.03 0 0 0 .066 8.502A5.976 5.976 0 0 0 9.5 16.007V17.5a.5.5 0 1 0 1 0v-1.492a5.976 5.976 0 0 0 3.743-1.736l.009-.01l.011-.011a6.03 6.03 0 0 0 .046-8.481l-3.237-3.307zm-.572 12.53a5.048 5.048 0 0 1-1 0V9.498a.5.5 0 0 1 1 0v5.492z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default LeafFilled;
