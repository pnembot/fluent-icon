import React, { SVGProps } from "react";

export function BluetoothDisabled(props: SVGProps<SVGSVGElement>) {
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
        d="m13.5 14.207l3.646 3.647a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708L9 9.707v.066l-3.83 3.35a.5.5 0 0 0 .66.753L9 11.102V17.5a.5.5 0 0 0 .854.354l3.646-3.647Zm.33-7.33L11.251 9.13l-.708-.709l2.224-1.946L10 3.707V7.88l-1-1V2.5a.5.5 0 0 1 .854-.354l4 4a.5.5 0 0 1-.025.73ZM10 11.101l2.768 2.422L10 16.293v-5.191Z"
      />
    </svg>
  );
}
export default BluetoothDisabled;
