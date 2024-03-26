import React, { SVGProps } from "react";

export function MailAllUnreadFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M14.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm-3.163-4H4.5a2.5 2.5 0 0 0-2.485 2.223L9 8.92l3.264-1.727A3.493 3.493 0 0 1 11 4.5c0-.537.12-1.045.337-1.5Zm1.972 4.792L9.254 9.931a.5.5 0 0 1-.507 0L2 6.373V12.5A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5V7.663A3.487 3.487 0 0 1 14.5 8a3.47 3.47 0 0 1-1.19-.208ZM6.5 17a2.496 2.496 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-5c.607.456 1 1.182 1 2v3a4.5 4.5 0 0 1-4.5 4.5h-7Z"
      />
    </svg>
  );
}
export default MailAllUnreadFilled;
