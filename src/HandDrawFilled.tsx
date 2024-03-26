import React, { SVGProps } from "react";

export function HandDrawFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M17 3c0-.613-.368-1.036-.844-1.303c-.458-.257-1.07-.408-1.738-.504C13.08 1 11.303 1 9.532 1H9.5a.5.5 0 0 0 0 1c1.809 0 3.517.001 4.775.182c.633.092 1.097.222 1.391.387c.276.155.334.294.334.431c0 .15-.063.288-.314.437c-.272.162-.704.29-1.293.381C13.22 3.998 11.639 4 10 4h-.032c-1.601 0-3.256 0-4.513.193c-.629.097-1.213.25-1.652.51C3.343 4.976 3 5.399 3 6c0 .792.646 1.267 1.322 1.525c.704.268 1.647.393 2.678.393v-1c-.97 0-1.776-.12-2.322-.328C4.104 6.372 4 6.138 4 6c0-.15.063-.288.314-.437c.272-.162.704-.29 1.293-.381C6.78 5.002 8.361 5 10 5h.032c1.601 0 3.256 0 4.513-.193c.629-.097 1.213-.25 1.652-.51c.46-.273.803-.696.803-1.297ZM9.5 5.999a1.5 1.5 0 0 0-1.5 1.5v4.242l-1.345-.58a1.937 1.937 0 0 0-2.616 1.206a.86.86 0 0 0 .382.994l3.967 2.355a2.296 2.296 0 0 1 1.026 1.072c.17.353.44.681.774.907c.338.228.769.368 1.232.279l2-.385a1.5 1.5 0 0 0 1.172-1.11l.832-3.327a2.5 2.5 0 0 0-1.93-3.057L11 9.591V7.499a1.5 1.5 0 0 0-1.5-1.5Z"
      />
    </svg>
  );
}
export default HandDrawFilled;
