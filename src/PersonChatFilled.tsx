import React, { SVGProps } from "react";

export function PersonChatFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm-4.991 9A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797c1.078.687 2.472 1.07 3.99 1.174l.365-1.198A5.484 5.484 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5H5.009ZM19 14.5a4.5 4.5 0 0 1-6.681 3.937l-1.79.544a.41.41 0 0 1-.51-.51l.544-1.789A4.5 4.5 0 1 1 19 14.5ZM12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm-.5 2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default PersonChatFilled;
