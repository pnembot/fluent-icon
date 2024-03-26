import React, { SVGProps } from "react";

export function MailWarning(props: SVGProps<SVGSVGElement>) {
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
        d="m13.603 1.554l-3.496 6.998A1 1 0 0 0 11.002 10h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0Zm1.395 1.941v3.002a.5.5 0 1 1-1 0V3.495a.5.5 0 1 1 1 0ZM14.498 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1ZM4.5 4h6.767l-.5 1H4.5A1.5 1.5 0 0 0 3 6.5v.302l7 4.118l.17-.1c.252.115.534.18.837.18h.829l-1.582.931a.5.5 0 0 1-.426.038l-.082-.038L3 7.963V14.5A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5V11h1v3.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4Z"
      />
    </svg>
  );
}
export default MailWarning;
