import React, { SVGProps } from "react";

export function PersonBoardFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm4.75 3.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0Zm1.75 4c0 .588-.146 2.5-3.502 2.5c-3.357 0-3.498-1.929-3.498-2.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1ZM5.764 16c.55.614 1.347 1 2.236 1h4.5a4.5 4.5 0 0 0 4.5-4.5V8c0-.888-.386-1.687-1-2.236V12.5a3.5 3.5 0 0 1-3.5 3.5H5.764Z"
      />
    </svg>
  );
}
export default PersonBoardFilled;
