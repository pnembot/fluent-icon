import React, { SVGProps } from "react";

export function PinOff(props: SVGProps<SVGSVGElement>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l4.75 4.75l-2.878 1.15a1 1 0 0 0-.335 1.636L6.293 13L3 16.293V17h.707L7 13.707l2.61 2.61a1 1 0 0 0 1.636-.335l1.15-2.878l4.75 4.75a.5.5 0 0 0 .708-.708l-15-15Zm8.774 10.189l-1.31 3.275L4.39 9.683l3.275-1.31l3.963 3.962Zm1.329-1.622a2.553 2.553 0 0 0-.08.042l.743.744l3.242-1.621a2 2 0 0 0 .52-3.203l-4.057-4.057a2 2 0 0 0-3.203.52L8.502 6.38l.743.744c.015-.027.029-.053.042-.08l1.73-3.459a1 1 0 0 1 1.601-.26l4.057 4.057a1 1 0 0 1-.26 1.602l-3.458 1.729Z"
      />
    </svg>
  );
}
export default PinOff;