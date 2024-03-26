import React, { SVGProps } from "react";

export function HighlightAccentFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16.5 3v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V3h13Zm-10 7.5v7l6.447-3.106a1 1 0 0 0 .553-.894v-3h-7Z"
      />
    </svg>
  );
}
export default HighlightAccentFilled;
