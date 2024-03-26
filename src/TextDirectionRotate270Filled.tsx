import React, { SVGProps } from "react";

export function TextDirectionRotate270Filled(props: SVGProps<SVGSVGElement>) {
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
          d="M4.22 5.22a.75.75 0 0 0 1.06 1.06L6 5.56v3.69a.75.75 0 0 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2A.748.748 0 0 0 6.752 3h-.004a.748.748 0 0 0-.528.22l-2 2z"
          fill="currentColor"
        />
        <path
          d="M11.72 5.22a.75.75 0 1 0 1.06 1.06l.72-.72v10.69a.75.75 0 1 0 1.5 0V5.56l.72.72a.75.75 0 0 0 1.06-1.06l-2-2a.75.75 0 0 0-1.06 0l-2 2z"
          fill="currentColor"
        />
        <path
          d="M3 13.5a.75.75 0 0 1 .471-.696l7.5-3a.75.75 0 1 1 .557 1.393l-2.028.81v2.985l2.028.812a.75.75 0 0 1-.556 1.393l-7.5-3A.75.75 0 0 1 3 13.5zm2.77 0l2.23.892v-1.784l-2.23.892z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default TextDirectionRotate270Filled;
