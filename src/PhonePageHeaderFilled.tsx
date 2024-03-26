import React, { SVGProps } from "react";

export function PhonePageHeaderFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1H5V4Zm0 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6H5Z"
      />
    </svg>
  );
}
export default PhonePageHeaderFilled;