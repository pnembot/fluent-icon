import React, { SVGProps } from "react";

export function PulseSquareFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm5.97 1.332a.5.5 0 0 0-.938-.008L6.654 10H5.5a.5.5 0 0 0 0 1H7a.5.5 0 0 0 .468-.324l1.02-2.721l2.041 5.713a.5.5 0 0 0 .918.056L12.81 11h1.69a.5.5 0 0 0 0-1h-2a.5.5 0 0 0-.447.276l-.976 1.952L8.97 6.332Z"
      />
    </svg>
  );
}
export default PulseSquareFilled;
