import React, { SVGProps } from "react";

export function Cloud(props: SVGProps<SVGSVGElement>) {
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
        d="M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377C18 13.488 16.53 15 14.718 15H5.282C3.469 15 2 13.488 2 11.623C2 9.82 3.373 8.347 5.102 8.251l.251-.005C5.587 5.908 7.183 4 10 4Zm0 1C7.886 5 6.551 6.316 6.348 8.345a1 1 0 0 1-.995.901h-.07C4.027 9.246 3 10.304 3 11.623C3 12.943 4.028 14 5.282 14h9.436C15.972 14 17 12.942 17 11.623c0-1.32-1.028-2.377-2.282-2.377h-.071a1 1 0 0 1-.995-.9C13.45 6.325 12.109 5 10 5Z"
      />
    </svg>
  );
}
export default Cloud;
