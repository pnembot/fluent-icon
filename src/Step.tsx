import React, { SVGProps } from "react";

export function Step(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M9 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8.5a2.5 2.5 0 0 1-2.5 2.5H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3V7a1 1 0 0 1 1-1h3V3Zm4 0h-3v3a1 1 0 0 1-1 1H6v2a1 1 0 0 1-1 1H2v3h9.5a1.5 1.5 0 0 0 1.5-1.5V3Z"
      />
    </svg>
  );
}
export default Step;
