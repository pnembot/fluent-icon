import React, { SVGProps } from "react";

export function ResizeVideoFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5.25 2A3.25 3.25 0 0 0 2 5.25v3a.75.75 0 0 0 1.5 0v-3c0-.966.784-1.75 1.75-1.75h3a.75.75 0 0 0 0-1.5h-3Zm6.5 0a.75.75 0 0 0 0 1.5h3c.966 0 1.75.784 1.75 1.75v3a.75.75 0 0 0 1.5 0v-3A3.25 3.25 0 0 0 14.75 2h-3ZM18 11.75a.75.75 0 0 0-1.5 0v3a1.75 1.75 0 0 1-1.75 1.75h-3a.75.75 0 0 0 0 1.5h3A3.25 3.25 0 0 0 18 14.75v-3ZM3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 7.5 19h-4A2.5 2.5 0 0 1 1 16.5v-4A2.5 2.5 0 0 1 3.5 10Zm.724 2.553A.5.5 0 0 0 3.5 13v3a.5.5 0 0 0 .724.447l3-1.5a.5.5 0 0 0 0-.894l-3-1.5Z"
      />
    </svg>
  );
}
export default ResizeVideoFilled;