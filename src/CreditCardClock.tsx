import React, { SVGProps } from "react";

export function CreditCardClock(props: SVGProps<SVGSVGElement>) {
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
        d="M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h4.457a5.48 5.48 0 0 1-.185-1H4.75A1.75 1.75 0 0 1 3 13.25V9h15V6.75A2.75 2.75 0 0 0 15.25 4H4.75ZM3 6.75C3 5.784 3.784 5 4.75 5h10.5c.966 0 1.75.784 1.75 1.75V8H3V6.75Zm16 7.75a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
}
export default CreditCardClock;
