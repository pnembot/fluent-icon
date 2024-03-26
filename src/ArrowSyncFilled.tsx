import React, { SVGProps } from "react";

export function ArrowSyncFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M9.885 3.75a6.25 6.25 0 0 0-3.628 11.256a.75.75 0 0 1-.9 1.2a7.75 7.75 0 0 1 3.99-13.93l-.584-.586A.75.75 0 0 1 9.823.63l2.122 2.121a.75.75 0 0 1 0 1.06L9.823 5.934a.75.75 0 0 1-1.06-1.06L9.885 3.75Zm.23 12.498a6.25 6.25 0 0 0 3.628-11.256a.75.75 0 0 1 .9-1.2a7.75 7.75 0 0 1-3.99 13.93l.584.585a.75.75 0 1 1-1.06 1.061l-2.122-2.121a.75.75 0 0 1 0-1.06l2.122-2.122a.75.75 0 1 1 1.06 1.06l-1.122 1.123Z"
      />
    </svg>
  );
}
export default ArrowSyncFilled;
