import React, { SVGProps } from "react";

export function ResizeVideo(props: SVGProps<SVGSVGElement>) {
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
        d="M5 2a3 3 0 0 0-3 3v3.5a.5.5 0 0 0 1 0V5a2 2 0 0 1 2-2h3.5a.5.5 0 0 0 0-1H5Zm6.5 0a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v3.5a.5.5 0 0 0 1 0V5a3 3 0 0 0-3-3h-3.5Zm6.5 9.5a.5.5 0 0 0-1 0V15a2 2 0 0 1-2 2h-3.5a.5.5 0 0 0 0 1H15a3 3 0 0 0 3-3v-3.5ZM3.5 10A2.5 2.5 0 0 0 1 12.5v4A2.5 2.5 0 0 0 3.5 19h4a2.5 2.5 0 0 0 2.5-2.5v-4A2.5 2.5 0 0 0 7.5 10h-4Zm.724 2.553l3 1.5a.5.5 0 0 1 0 .894l-3 1.5A.5.5 0 0 1 3.5 16v-3a.5.5 0 0 1 .724-.447Z"
      />
    </svg>
  );
}
export default ResizeVideo;
