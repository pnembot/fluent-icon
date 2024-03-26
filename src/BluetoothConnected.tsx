import React, { SVGProps } from "react";

export function BluetoothConnected(props: SVGProps<SVGSVGElement>) {
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
        d="M9.309 2.038a.5.5 0 0 1 .545.108l4 4a.5.5 0 0 1-.025.73L10.26 10l3.57 3.124a.5.5 0 0 1 .025.73l-4 4A.5.5 0 0 1 9 17.5v-6.398l-3.17 2.774a.5.5 0 0 1-.66-.752L8.74 10L5.17 6.876a.5.5 0 0 1 .66-.752L9 8.898V2.5a.5.5 0 0 1 .309-.462ZM10 11.102v5.19l2.768-2.768L10 11.102Zm0-2.204l2.768-2.422L10 3.707v5.191ZM17 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0ZM3 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default BluetoothConnected;
