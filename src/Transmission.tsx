import React, { SVGProps } from "react";

export function Transmission(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2a2 2 0 0 0-.496 3.938A.506.506 0 0 0 9.5 6v3.5a.5.5 0 0 0 1 0V6a.508.508 0 0 0-.004-.062A2 2 0 0 0 10 2ZM9 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0ZM4 4a1 1 0 0 0-1 1v11a1 1 0 1 0 2 0v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a1 1 0 1 0 2 0v-3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 0 .5-.5V5a1 1 0 1 0-2 0v4a.5.5 0 0 1-.5.5H12a.5.5 0 0 1 0-1h2V5a2 2 0 1 1 4 0v6.5a1.5 1.5 0 0 1-1.5 1.5H12v3a2 2 0 1 1-4 0v-3.5H6V16a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0v3.5h2a.5.5 0 0 1 0 1H5.5A.5.5 0 0 1 5 9V5a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
}
export default Transmission;
