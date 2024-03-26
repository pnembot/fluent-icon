import React, { SVGProps } from "react";

export function ImageFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a3 3 0 0 0-3 3v8c0 .65.206 1.25.557 1.742l5.39-5.308a1.5 1.5 0 0 1 2.105 0l5.39 5.308A2.975 2.975 0 0 0 17 14V6a3 3 0 0 0-3-3H6Zm0 14a2.987 2.987 0 0 1-1.735-.552l5.384-5.3a.5.5 0 0 1 .702 0l5.384 5.3A2.987 2.987 0 0 1 14 17H6Zm6.5-8.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5Z"
      />
    </svg>
  );
}
export default ImageFilled;
