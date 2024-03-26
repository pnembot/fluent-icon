import React, { SVGProps } from "react";

export function ViewDesktop(props: SVGProps<SVGSVGElement>) {
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
        d="M4 5.5a.5.5 0 0 1 .5-.5h.998a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1-.5-.5v-6ZM7.5 5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-8Zm-5.538-.5a1.5 1.5 0 0 1 1.5-1.5h12.94a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H12v2.015h1.499a.5.5 0 0 1 0 1h-7a.5.5 0 1 1 0-1h1.5V14H3.463a1.5 1.5 0 0 1-1.5-1.5v-8ZM9 14v2.015h2V14H9ZM3.462 4a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12.94a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5H3.461Z"
      />
    </svg>
  );
}
export default ViewDesktop;