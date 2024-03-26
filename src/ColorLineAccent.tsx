import React, { SVGProps } from "react";

export function ColorLineAccent(props: SVGProps<SVGSVGElement>) {
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
        d="M4.095 13a1.497 1.497 0 0 0 1.772.952l3.112-.767l.21-.064l.025-.009c.088-.033.175-.07.26-.112H16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h.095Z"
      />
    </svg>
  );
}
export default ColorLineAccent;
