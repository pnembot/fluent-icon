import React, { SVGProps } from "react";

export function MoreVertical(props: SVGProps<SVGSVGElement>) {
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
        d="M10 6a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 10 6Zm0 5.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Zm-1.25 4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0Z"
      />
    </svg>
  );
}
export default MoreVertical;