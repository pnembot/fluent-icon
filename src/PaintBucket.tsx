import React, { SVGProps } from "react";

export function PaintBucket(props: SVGProps<SVGSVGElement>) {
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
        d="M9 2.5a.5.5 0 0 0-1 0V4c-.205.072-.397.19-.56.354L2.353 9.439a1.5 1.5 0 0 0 0 2.122l4.335 4.335a1.5 1.5 0 0 0 2.122 0l5.085-5.085a1.5 1.5 0 0 0 0-2.122L9.561 4.354A1.494 1.494 0 0 0 9 4V2.5ZM8 5.207V6.5a.5.5 0 0 0 1 0V5.207l4.19 4.19a.5.5 0 0 1 .079.603H3.207L8 5.207Zm-.604 9.982L3.207 11h9.086l-4.19 4.19a.5.5 0 0 1-.707 0Zm8.62-3.797a.597.597 0 0 0-1.032 0l-1.652 2.833C12.355 15.898 13.562 18 15.5 18c1.937 0 3.145-2.102 2.168-3.775l-1.652-2.833Zm-1.82 3.337l1.304-2.237l1.305 2.237a1.51 1.51 0 1 1-2.61 0Z"
      />
    </svg>
  );
}
export default PaintBucket;
