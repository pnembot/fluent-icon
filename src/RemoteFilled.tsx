import React, { SVGProps } from "react";

export function RemoteFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16.97 15.03a.75.75 0 1 0 1.06-1.06L12.56 8.5l5.47-5.47a.75.75 0 0 0-1.06-1.06l-6 6a.75.75 0 0 0 0 1.06l6 6ZM3.03 4.97a.75.75 0 0 0-1.06 1.06l5.47 5.47l-5.47 5.47a.75.75 0 1 0 1.06 1.06l6-6a.75.75 0 0 0 0-1.06l-6-6Z"
      />
    </svg>
  );
}
export default RemoteFilled;