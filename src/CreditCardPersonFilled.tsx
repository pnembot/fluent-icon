import React, { SVGProps } from "react";

export function CreditCardPersonFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75V8H2V6.75ZM2 9h12.5a3 3 0 0 0-2.227 5.01A2.502 2.502 0 0 0 10.05 16h-5.3A2.75 2.75 0 0 1 2 13.25V9Zm14.5 3a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S11 17.75 11 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default CreditCardPersonFilled;
