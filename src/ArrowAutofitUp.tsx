import React, { SVGProps } from "react";

export function ArrowAutofitUp(props: SVGProps<SVGSVGElement>) {
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
        d="m16.142 4.81l-1.14-1.18V17.5a.5.5 0 1 1-1 0V3.626L12.86 4.809a.5.5 0 0 1-.72-.694l1.821-1.886a.75.75 0 0 1 1.08 0l1.82 1.886a.5.5 0 1 1-.72.694ZM5 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6.5a.5.5 0 0 0 0-1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4.5a.5.5 0 0 0 0-1H5Z"
      />
    </svg>
  );
}
export default ArrowAutofitUp;
