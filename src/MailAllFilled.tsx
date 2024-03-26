import React, { SVGProps } from "react";

export function MailAllFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path
          d="M16 12.5V6.373L9.254 9.931a.5.5 0 0 1-.507 0L2 6.373V12.5A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5z"
          fill="currentColor"
        />
        <path
          d="M15.985 5.223A2.5 2.5 0 0 0 13.5 3h-9a2.5 2.5 0 0 0-2.485 2.223L9 8.92l6.985-3.697z"
          fill="currentColor"
        />
        <path
          d="M6.5 17a2.496 2.496 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-7c.607.456 1 1.182 1 2v5a4.5 4.5 0 0 1-4.5 4.5h-7z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default MailAllFilled;
