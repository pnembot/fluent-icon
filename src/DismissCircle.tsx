import React, { SVGProps } from "react";

export function DismissCircle(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16Zm0 1a7 7 0 1 0 0 14a7 7 0 0 0 0-14ZM7.81 7.114l.069.058L10 9.292l2.121-2.12a.5.5 0 0 1 .638-.058l.07.058a.5.5 0 0 1 .057.637l-.058.07L10.708 10l2.12 2.121a.5.5 0 0 1 .058.638l-.058.07a.5.5 0 0 1-.637.057l-.07-.058L10 10.708l-2.121 2.12a.5.5 0 0 1-.638.058l-.07-.058a.5.5 0 0 1-.057-.637l.058-.07L9.292 10l-2.12-2.121a.5.5 0 0 1-.058-.638l.058-.07a.5.5 0 0 1 .637-.057Z"
      />
    </svg>
  );
}
export default DismissCircle;
