import React, { SVGProps } from "react";

export function FlipVertical(props: SVGProps<SVGSVGElement>) {
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
        d="M15.77 2.079A.5.5 0 0 1 16 2.5v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.21-.954l13-6a.5.5 0 0 1 .48.033ZM4.777 8H15V3.281L4.777 8ZM16 17.5a.5.5 0 0 1-.71.454l-13-6A.5.5 0 0 1 2.5 11h13a.5.5 0 0 1 .5.5v6Z"
      />
    </svg>
  );
}
export default FlipVertical;
