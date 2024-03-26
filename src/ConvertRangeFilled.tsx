import React, { SVGProps } from "react";

export function ConvertRangeFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5 2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H5Zm12.5 5a.5.5 0 0 1 .5.5v2a2.5 2.5 0 0 1-2.5 2.5h-1.793l1.147 1.146a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .708.708L13.707 11H15.5A1.5 1.5 0 0 0 17 9.5v-2a.5.5 0 0 1 .5-.5Zm-5.621 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.085a1.5 1.5 0 0 1-1.56-.354l-2-2a1.5 1.5 0 0 1 0-2.122l.439-.439ZM6.5 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default ConvertRangeFilled;