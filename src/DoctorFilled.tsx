import React, { SVGProps } from "react";

export function DoctorFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M8.5 3A1.5 1.5 0 0 0 7 4.5v2.501H4.5a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5H7v2.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-2.5h2.5a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5H13V4.5A1.5 1.5 0 0 0 11.5 3h-3Z"
      />
    </svg>
  );
}
export default DoctorFilled;
