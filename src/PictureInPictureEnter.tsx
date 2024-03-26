import React, { SVGProps } from "react";

export function PictureInPictureEnter(props: SVGProps<SVGSVGElement>) {
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
        d="M2 5.75A2.75 2.75 0 0 1 4.75 3h10.5A2.75 2.75 0 0 1 18 5.75V10h-1V5.75A1.75 1.75 0 0 0 15.25 4H4.75A1.75 1.75 0 0 0 3 5.75v6.5c0 .966.784 1.75 1.75 1.75H9v1H4.75A2.75 2.75 0 0 1 2 12.25v-6.5ZM11.5 11a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5h-6ZM4.646 5.646a.5.5 0 0 1 .708 0L8 8.293V6.5a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1h1.793L4.646 6.354a.5.5 0 0 1 0-.708Z"
      />
    </svg>
  );
}
export default PictureInPictureEnter;
