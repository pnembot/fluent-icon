import React, { SVGProps } from "react";

export function PhoneStatusBarFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4Zm2.5 0a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Z"
      />
    </svg>
  );
}
export default PhoneStatusBarFilled;
