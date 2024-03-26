import React, { SVGProps } from "react";

export function AttachFilled(props: SVGProps<SVGSVGElement>) {
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
        d="m5.28 10.609l5.304-5.304a2.75 2.75 0 1 1 3.889 3.89l-6.364 6.364A1.25 1.25 0 1 1 6.34 13.79l5.657-5.657a.75.75 0 0 0-1.06-1.06L5.28 12.73a2.75 2.75 0 0 0 3.89 3.89l6.363-6.365a4.25 4.25 0 0 0-6.01-6.01L4.22 9.548a.75.75 0 0 0 1.06 1.06Z"
      />
    </svg>
  );
}
export default AttachFilled;
