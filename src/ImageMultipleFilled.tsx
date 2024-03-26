import React, { SVGProps } from "react";

export function ImageMultipleFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3a3 3 0 0 0-3 3v6c0 .648.205 1.248.555 1.738l4.03-4.03a2 2 0 0 1 2.83 0l4.03 4.03c.35-.49.555-1.09.555-1.738V6a3 3 0 0 0-3-3H6Zm6.5 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm1.238 7.945l-4.03-4.03a1 1 0 0 0-1.415 0l-4.031 4.03c.49.35 1.09.555 1.738.555h6a2.98 2.98 0 0 0 1.738-.555ZM5.764 16c.55.614 1.348 1 2.236 1h4.5a4.5 4.5 0 0 0 4.5-4.5V8c0-.888-.386-1.687-1-2.236V12.5a3.5 3.5 0 0 1-3.5 3.5H5.764Z"
      />
    </svg>
  );
}
export default ImageMultipleFilled;
