import React, { SVGProps } from "react";

export function GlanceFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 14.5v1A1.5 1.5 0 0 0 4.5 17h3A1.5 1.5 0 0 0 9 15.5v-1A1.5 1.5 0 0 0 7.5 13h-3A1.5 1.5 0 0 0 3 14.5Zm0-10v5A1.5 1.5 0 0 0 4.5 11h3A1.5 1.5 0 0 0 9 9.5v-5A1.5 1.5 0 0 0 7.5 3h-3A1.5 1.5 0 0 0 3 4.5Zm8 0v1A1.5 1.5 0 0 0 12.5 7h3A1.5 1.5 0 0 0 17 5.5v-1A1.5 1.5 0 0 0 15.5 3h-3A1.5 1.5 0 0 0 11 4.5ZM12.5 9a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 15.5 9h-3Z"
      />
    </svg>
  );
}
export default GlanceFilled;
