import React, { SVGProps } from "react";

export function FlagFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 13h11a.5.5 0 0 0 .416-.777L13.101 8l2.815-4.223A.5.5 0 0 0 15.5 3H4a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 1 0V13Z"
      />
    </svg>
  );
}
export default FlagFilled;