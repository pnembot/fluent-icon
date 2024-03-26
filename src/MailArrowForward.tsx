import React, { SVGProps } from "react";

export function MailArrowForward(props: SVGProps<SVGSVGElement>) {
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
        d="M17 14.5v-4.1a5.507 5.507 0 0 0 1-.657V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h4.707a5.48 5.48 0 0 0-.185 1H4.5A1.5 1.5 0 0 0 3 6.5v.302l7 4.118l1.441-.848c.325.217.674.401 1.043.547l-2.23 1.312a.5.5 0 0 1-.426.038l-.082-.038L3 7.963V14.5A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5Zm-7-9a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm5.396-2.604a.5.5 0 0 1 .708 0l1.75 1.75a.5.5 0 0 1 .002.705l-1.752 1.753a.5.5 0 0 1-.708-.708l.897-.896H14.75A1.75 1.75 0 0 0 13 7.25v.25a.5.5 0 0 1-1 0v-.25a2.75 2.75 0 0 1 2.75-2.75h1.543l-.897-.896a.5.5 0 0 1 0-.708Z"
      />
    </svg>
  );
}
export default MailArrowForward;
