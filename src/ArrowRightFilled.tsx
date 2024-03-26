import React, { SVGProps } from "react";

export function ArrowRightFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M11.265 3.205a.75.75 0 0 0-1.03 1.09l5.239 4.955H2.75a.75.75 0 0 0 0 1.5h12.726l-5.241 4.957a.75.75 0 1 0 1.03 1.09l6.418-6.07a.995.995 0 0 0 .3-.566a.753.753 0 0 0-.002-.329a.995.995 0 0 0-.298-.557l-6.418-6.07Z"
      />
    </svg>
  );
}
export default ArrowRightFilled;