import React, { SVGProps } from "react";

export function WebAssetFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3.5 0a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z"
      />
    </svg>
  );
}
export default WebAssetFilled;
