import React, { SVGProps } from "react";

export function CallMissedFilled(props: SVGProps<SVGSVGElement>) {
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
        d="m17.802 7.77l.157-.83c.157-.822-.145-1.698-.805-2.28c-1.568-1.384-3.83-2.16-7.162-2.156c-3.326.004-5.89.784-7.316 2.168a2.255 2.255 0 0 0-.577 2.28l.248.83A1.735 1.735 0 0 0 4.169 8.99l1.628-.163C6.496 8.757 6.802 8.17 7 7.5c.296-1.004.5-1.75.5-1.75c.762-.285 1.486-.5 2.5-.5s1.752.194 2.5.5c0 0 .196.745.5 1.75c.224.74.753 1.261 1.467 1.33l1.637.158c.823.08 1.55-.442 1.698-1.219ZM9.5 11.5a.5.5 0 0 1 .5.5v1.5h1.005a.5.5 0 1 1 0 1H9.5A.5.5 0 0 1 9 14v-2a.5.5 0 0 1 .5-.5Zm-4 2a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0ZM10 10a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"
      />
    </svg>
  );
}
export default CallMissedFilled;