import React, { SVGProps } from "react";

export function Trophy(props: SVGProps<SVGSVGElement>) {
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
        d="M2.996 6.998a3.006 3.006 0 0 0 2.61 2.974a4.503 4.503 0 0 0 3.895 3.5v1.496H7.504a2 2 0 0 0-2 2v.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-.5a2 2 0 0 0-2-2h-2.003v-1.495a4.503 4.503 0 0 0 3.894-3.499a2.996 2.996 0 0 0 2.601-2.97V5.5a1.5 1.5 0 0 0-1.5-1.5h-.995a2 2 0 0 0-2-1.998h-5A2 2 0 0 0 5.5 4H4.496a1.5 1.5 0 0 0-1.5 1.5v1.498ZM4.496 5h1.005v3.934a2.006 2.006 0 0 1-1.505-1.936V5.5a.5.5 0 0 1 .5-.5Zm10.005 0h.995a.5.5 0 0 1 .5.5v1.505c0 .929-.635 1.71-1.495 1.932V5Zm-1-.998V9a3.5 3.5 0 0 1-6.997.156V4h-.003a1 1 0 0 1 1-.998h5a1 1 0 0 1 1 1ZM6.504 16.968a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1h-7Z"
      />
    </svg>
  );
}
export default Trophy;