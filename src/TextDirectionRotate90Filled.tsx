import React, { SVGProps } from "react";

export function TextDirectionRotate90Filled(props: SVGProps<SVGSVGElement>) {
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
          d="M17 6.5a.75.75 0 0 0-.471-.696l-7.5-3a.75.75 0 0 0-.557 1.393l2.028.811v2.984l-2.028.812a.75.75 0 0 0 .557 1.393l7.5-3A.75.75 0 0 0 17 6.5zm-2.77 0L12 7.392V5.608l2.23.892z"
          fill="currentColor"
        />
        <path
          d="M5 3.75a.75.75 0 0 1 1.5 0v10.69l.72-.72a.75.75 0 0 1 1.06 1.06l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V3.75z"
          fill="currentColor"
        />
        <path
          d="M13 10.75a.75.75 0 0 1 1.5 0v3.69l.72-.72a.75.75 0 1 1 1.06 1.06l-2 2a.748.748 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72v-3.69z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default TextDirectionRotate90Filled;
