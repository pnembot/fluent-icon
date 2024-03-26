import React, { SVGProps } from "react";

export function DocumentRibbon(props: SVGProps<SVGSVGElement>) {
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
        d="M6 2a2 2 0 0 0-2 2v5.126C4.32 9.043 4.655 9 5 9V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1H8v1h6a2 2 0 0 0 2-2V7.413a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM8 13a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-1 3.464A3.982 3.982 0 0 1 5 17a3.982 3.982 0 0 1-2-.535v2.286a.25.25 0 0 0 .378.215L5 17.998l1.622.966A.25.25 0 0 0 7 18.75v-2.286Z"
      />
    </svg>
  );
}
export default DocumentRibbon;
