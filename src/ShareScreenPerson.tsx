import React, { SVGProps } from "react";

export function ShareScreenPerson(props: SVGProps<SVGSVGElement>) {
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
        d="M4.75 4A2.75 2.75 0 0 0 2 6.75v6.5A2.75 2.75 0 0 0 4.75 16h6.3c.075-.37.231-.71.45-1H4.75A1.75 1.75 0 0 1 3 13.25v-6.5C3 5.784 3.784 5 4.75 5h10.5c.966 0 1.75.784 1.75 1.75v2.651c.401.233.744.555 1 .94V6.75A2.75 2.75 0 0 0 15.25 4H4.75Zm12.75 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default ShareScreenPerson;