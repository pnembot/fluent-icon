import React, { SVGProps } from "react";

export function BluetoothFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M9.463 2.057a.75.75 0 0 1 .817.163l4 4a.75.75 0 0 1-.057 1.112L10.939 10l3.284 2.668a.75.75 0 0 1 .057 1.112l-4 4A.75.75 0 0 1 9 17.25v-5.674l-2.777 2.256a.75.75 0 0 1-.946-1.164L8.561 10L5.277 7.332a.75.75 0 1 1 .946-1.164L9 8.424V2.75a.75.75 0 0 1 .463-.693Zm1.037 9.519v3.863l2.132-2.131l-2.132-1.732Zm0-3.152l2.132-1.732L10.5 4.561v3.863Z"
      />
    </svg>
  );
}
export default BluetoothFilled;
