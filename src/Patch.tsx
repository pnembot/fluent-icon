import React, { SVGProps } from "react";

export function Patch(props: SVGProps<SVGSVGElement>) {
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
        d="M10.5 8a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm0 2a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Zm-2.5.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm4.5-.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0ZM10 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1Zm-6.94 2.768a2.5 2.5 0 0 1 0-3.536l8.672-8.672a2.5 2.5 0 0 1 3.536 0l1.671 1.672a2.5 2.5 0 0 1 0 3.535L8.268 16.94a2.5 2.5 0 0 1-3.536 0L3.06 15.268Zm.708-2.829a1.5 1.5 0 0 0 0 2.121l1.671 1.672a1.5 1.5 0 0 0 2.121 0L9.293 14.5L5.5 10.707l-1.732 1.732Zm10.025-2.44L10 6.208L6.207 10L10 13.793L13.793 10Zm.707-.706l1.732-1.733a1.5 1.5 0 0 0 0-2.121l-1.671-1.672a1.5 1.5 0 0 0-2.122 0L10.707 5.5L14.5 9.293Zm-3.793 6.621l1.025 1.025a2.5 2.5 0 0 0 3.536 0l1.671-1.671a2.5 2.5 0 0 0 0-3.536l-1.025-1.025l-.707.707l1.025 1.025a1.5 1.5 0 0 1 0 2.121l-1.672 1.672a1.5 1.5 0 0 1-2.121 0l-1.025-1.025l-.707.707ZM8.586 4.793L7.56 3.768a1.5 1.5 0 0 0-2.121 0L3.767 5.439a1.5 1.5 0 0 0 0 2.122l1.026 1.025l-.707.707L3.06 8.268a2.5 2.5 0 0 1 0-3.536l1.672-1.671a2.5 2.5 0 0 1 3.535 0l1.026 1.025l-.707.707Z"
      />
    </svg>
  );
}
export default Patch;