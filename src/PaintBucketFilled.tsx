import React, { SVGProps } from "react";

export function PaintBucketFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M9 2.5a.5.5 0 0 0-1 0V4c-.205.072-.397.19-.56.354L2.353 9.439a1.5 1.5 0 0 0 0 2.122l4.335 4.335a1.5 1.5 0 0 0 2.122 0l5.085-5.085a1.5 1.5 0 0 0 0-2.122L9.561 4.354A1.494 1.494 0 0 0 9 4V2.5Zm4.269 7.5H3.207L8 5.207V6.5a.5.5 0 0 0 1 0V5.207l4.19 4.19a.5.5 0 0 1 .079.603Zm2.747 1.392a.597.597 0 0 0-1.032 0l-1.652 2.833C12.355 15.898 13.562 18 15.5 18c1.937 0 3.145-2.102 2.168-3.775l-1.652-2.833Z"
      />
    </svg>
  );
}
export default PaintBucketFilled;
