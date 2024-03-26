import React, { SVGProps } from "react";

export function ArrowMove(props: SVGProps<SVGSVGElement>) {
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
        d="M10.354 2.146a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 1 0 .708.708L9.5 3.707V7.5a.5.5 0 0 0 1 0V3.707l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5Zm-8.208 7.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L3.707 10.5H7.5a.5.5 0 0 0 0-1H3.707l1.647-1.646a.5.5 0 1 0-.708-.708l-2.5 2.5ZM10 18a.5.5 0 0 1-.354-.146l-2.5-2.5a.5.5 0 0 1 .708-.708L9.5 16.293V12.5a.5.5 0 0 1 1 0v3.793l1.646-1.647a.5.5 0 0 1 .708.708l-2.5 2.5A.5.5 0 0 1 10 18Zm7.854-7.646a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708L16.293 9.5H12.5a.5.5 0 0 0 0 1h3.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5Z"
      />
    </svg>
  );
}
export default ArrowMove;
