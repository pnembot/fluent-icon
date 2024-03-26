import React, { SVGProps } from "react";

export function CloudAdd(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2c2.817 0 4.415 1.923 4.647 4.246h.07C16.532 6.246 18 7.758 18 9.623c0 .095-.004.19-.011.283a5.782 5.782 0 0 0-1.114-1.062c-.31-.933-1.163-1.598-2.157-1.598h-.071a1 1 0 0 1-.995-.9C13.45 4.325 12.109 3 10 3C7.886 3 6.551 4.316 6.348 6.345a1 1 0 0 1-.995.901h-.07C4.027 7.246 3 8.304 3 9.623C3 10.943 4.028 12 5.282 12h2.666a5.733 5.733 0 0 0-.177 1H5.282C3.469 13 2 11.488 2 9.623C2 7.82 3.373 6.347 5.102 6.251l.251-.005C5.587 3.908 7.183 2 10 2Zm3.5 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-7a.5.5 0 0 1 .5.5V13h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V14h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default CloudAdd;
