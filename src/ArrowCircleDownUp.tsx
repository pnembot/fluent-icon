import React, { SVGProps } from "react";

export function ArrowCircleDownUp(props: SVGProps<SVGSVGElement>) {
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
        d="M7.354 13.854L9 12.207a.5.5 0 1 0-.707-.707l-.793.793V6.5a.5.5 0 0 0-1 0v5.793l-.793-.793a.5.5 0 1 0-.707.707l1.646 1.647a.5.5 0 0 0 .708 0ZM15 7.793l-1.646-1.647a.5.5 0 0 0-.708 0L11 7.793a.5.5 0 1 0 .707.707l.793-.793V13.5a.5.5 0 1 0 1 0V7.707l.793.793A.5.5 0 1 0 15 7.793ZM18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0Zm-8 7a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"
      />
    </svg>
  );
}
export default ArrowCircleDownUp;
