import React, { SVGProps } from "react";

export function AppTitleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H7ZM4.5 17a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11Z"
      />
    </svg>
  );
}
export default AppTitleFilled;
