import React, { SVGProps } from "react";

export function PersonLock(props: SVGProps<SVGSVGElement>) {
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
        d="M5 6a4 4 0 1 1 8 0a4 4 0 0 1-8 0Zm4-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6ZM2 13c0-1.113.903-2 2.009-2h8.662c-.11.313-.171.65-.171 1H4.009C3.448 12 3 12.447 3 13c0 1.309.622 2.284 1.673 2.953C5.743 16.636 7.265 17 9 17c.708 0 1.38-.06 2-.178v1.016c-.638.109-1.31.162-2 .162c-1.855 0-3.583-.386-4.865-1.203C2.833 15.967 2 14.69 2 13Zm11.5 0v-1a2 2 0 1 1 4 0v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5Zm1-1v1h2v-1a1 1 0 1 0-2 0Zm1.75 4a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0Z"
      />
    </svg>
  );
}
export default PersonLock;
