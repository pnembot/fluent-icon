import React, { SVGProps } from "react";

export function MailPause(props: SVGProps<SVGSVGElement>) {
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
        d="M17 14.5v-4.1a5.507 5.507 0 0 0 1-.657V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h4.707a5.48 5.48 0 0 0-.185 1H4.5A1.5 1.5 0 0 0 3 6.5v.302l7 4.118l1.441-.848c.325.217.674.401 1.043.547l-2.23 1.312a.5.5 0 0 1-.426.038l-.082-.038L3 7.963V14.5A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5ZM14.5 10a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-1-6.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0Zm3 0v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default MailPause;
