import React, { SVGProps } from "react";

export function ArrowSplitFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 3a.75.75 0 0 1 .75.75V8h2.245a2 2 0 0 1 2 2v4.443l1.225-1.223a.75.75 0 1 1 1.059 1.062l-2.505 2.5a.75.75 0 0 1-1.06-.001l-2.499-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.219V10a.5.5 0 0 0-.5-.5H6.999a.5.5 0 0 0-.5.5v4.44l1.22-1.219a.75.75 0 0 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.061-1.06L5 14.44V10a2 2 0 0 1 2-2h2.25V3.75A.75.75 0 0 1 10 3Z"
      />
    </svg>
  );
}
export default ArrowSplitFilled;
