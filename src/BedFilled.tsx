import React, { SVGProps } from "react";

export function BedFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.5 9a2.5 2.5 0 0 1 2.495 2.336L18 11.5v5a.5.5 0 0 1-.992.09L17 16.5V14H3v2.5a.5.5 0 0 1-.992.09L2 16.5v-5a2.5 2.5 0 0 1 2.336-2.495L4.5 9h11Zm-9-6h7a2.5 2.5 0 0 1 2.495 2.336L16 5.5V8h-2v-.5a.5.5 0 0 0-.41-.492L13.5 7H11a.5.5 0 0 0-.492.41l-.008.09V8h-1v-.5a.5.5 0 0 0-.41-.492L9 7H6.5a.5.5 0 0 0-.492.41L6 7.5V8H4V5.5a2.5 2.5 0 0 1 2.336-2.495L6.5 3Z"
      />
    </svg>
  );
}
export default BedFilled;
