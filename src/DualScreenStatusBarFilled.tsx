import React, { SVGProps } from "react";

export function DualScreenStatusBarFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16 16h-5.5V4H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2ZM4 4h5.5v12H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm8.5 2a.5.5 0 0 0 0 1H16a.5.5 0 0 0 0-1h-3.5Z"
      />
    </svg>
  );
}
export default DualScreenStatusBarFilled;
