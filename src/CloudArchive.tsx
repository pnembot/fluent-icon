import React, { SVGProps } from "react";

export function CloudArchive(props: SVGProps<SVGSVGElement>) {
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
        d="M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.242 0 2.322.709 2.88 1.754h-1.212a2.237 2.237 0 0 0-1.667-.754h-.071a1 1 0 0 1-.995-.9C13.45 6.325 12.109 5 10 5C7.886 5 6.551 6.316 6.348 8.345a1 1 0 0 1-.995.901h-.07C4.027 9.246 3 10.304 3 11.623C3 12.943 4.028 14 5.282 14H10v1H5.282C3.469 15 2 13.488 2 11.623C2 9.82 3.373 8.347 5.102 8.251l.251-.005C5.587 5.908 7.183 4 10 4Zm0 8a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Zm8 2h-7v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3Zm-4.5 1h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default CloudArchive;
