import React, { SVGProps } from "react";

export function PhonePageHeader(props: SVGProps<SVGSVGElement>) {
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
        d="M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7ZM6 5h8v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5Z"
      />
    </svg>
  );
}
export default PhonePageHeader;
