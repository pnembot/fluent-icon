import React, { SVGProps } from "react";

export function CallForwardFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M9.288 2.198L8.44 2.04c-.842-.156-1.725.152-2.321.812C4.702 4.42 3.996 6.869 4 10.199c.004 3.325.715 5.7 2.132 7.125c.6.603 1.49.823 2.334.577l.849-.248a1.735 1.735 0 0 0 1.237-1.821l-.167-1.628a1.533 1.533 0 0 0-1.267-1.368l-1.805-.313a6.356 6.356 0 0 1-.58-2.512c-.026-.9.117-1.724.43-2.472l1.93-.505a1.742 1.742 0 0 0 1.281-1.503l.162-1.637c.082-.822-.452-1.548-1.248-1.696Zm5.066 3.448a.5.5 0 0 0-.708.708L16.293 9H10.5a.5.5 0 0 0 0 1h5.793l-2.647 2.646a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5Z"
      />
    </svg>
  );
}
export default CallForwardFilled;