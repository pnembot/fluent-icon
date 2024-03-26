import React, { SVGProps } from "react";

export function RecordFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm8 4.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Z"
      />
    </svg>
  );
}
export default RecordFilled;
