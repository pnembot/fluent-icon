import React, { SVGProps } from "react";

export function ServerMultiple(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM7 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm.5 1.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5ZM5 4.5A2.5 2.5 0 0 1 7.5 2h5A2.5 2.5 0 0 1 15 4.5V5h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1.05a2.5 2.5 0 0 1-2.45 2h-5a2.5 2.5 0 0 1-2.45-2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1v-.5ZM15 15h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1v9ZM5 6H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1V6Zm2.5-3A1.5 1.5 0 0 0 6 4.5v11A1.5 1.5 0 0 0 7.5 17h5a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 3h-5Z"
      />
    </svg>
  );
}
export default ServerMultiple;
