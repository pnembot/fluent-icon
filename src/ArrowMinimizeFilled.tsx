import React, { SVGProps } from "react";

export function ArrowMinimizeFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3.75 11h4.5a.75.75 0 0 1 .743.648L9 11.75v4.5a.75.75 0 0 1-1.493.102L7.5 16.25v-2.69l-4.47 4.47a.75.75 0 0 1-1.133-.976l.073-.084l4.468-4.47H3.75a.75.75 0 0 1-.743-.648L3 11.75a.75.75 0 0 1 .648-.743L3.75 11h4.5h-4.5Zm14.28-9.03a.75.75 0 0 1 .073.976l-.073.084L13.06 8h3.19a.75.75 0 0 1 .743.648L17 8.75a.75.75 0 0 1-.648.743l-.102.007h-5a.75.75 0 0 1-.743-.648L10.5 8.75v-5a.75.75 0 0 1 1.493-.102L12 3.75v3.188l4.97-4.968a.75.75 0 0 1 1.06 0Z"
      />
    </svg>
  );
}
export default ArrowMinimizeFilled;