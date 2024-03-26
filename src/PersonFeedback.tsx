import React, { SVGProps } from "react";

export function PersonFeedback(props: SVGProps<SVGSVGElement>) {
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
        d="M10.5 12a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4c-3.14 0-5-2.029-5-4v-.5A1.5 1.5 0 0 1 3.5 12h7Zm0 1h-7a.5.5 0 0 0-.5.5v.5c0 1.438 1.432 3 4 3s4-1.562 4-3v-.5a.5.5 0 0 0-.5-.5ZM7 5.5A2.75 2.75 0 1 1 7 11a2.75 2.75 0 0 1 0-5.5ZM16 2a2 2 0 0 1 1.994 1.85L18 4v2a2 2 0 0 1-1.85 1.995L16 8h-1.501l-1.198 1.6c-.53.706-1.604.42-1.777-.376l-.017-.111L11.5 9V7.935l-.078-.02a2.003 2.003 0 0 1-1.397-1.6l-.02-.166L10 6V4a2 2 0 0 1 1.85-1.995L12 2h4ZM7 6.5A1.75 1.75 0 1 0 7 10a1.75 1.75 0 0 0 0-3.5ZM16 3h-4a1 1 0 0 0-.993.883L11 4v2a1 1 0 0 0 .883.993L12 7h.5v2L14 7h2a1 1 0 0 0 .993-.883L17 6V4a1 1 0 0 0-.883-.993L16 3Z"
      />
    </svg>
  );
}
export default PersonFeedback;