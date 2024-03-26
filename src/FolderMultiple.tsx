import React, { SVGProps } from "react";

export function FolderMultiple(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M1 10V4a2 2 0 0 1 2-2h1.75a.5.5 0 0 1 .312.11L6.175 3H11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Zm2-7a1 1 0 0 0-1 1v.499h2.557l.886-.805L4.575 3H3Zm8 1H6.593L5.086 5.37a.498.498 0 0 1-.336.13H2V10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Zm3 6V5.27c.6.35 1 .99 1 1.73v3c0 2.21-1.79 4-4 4H5c-.74 0-1.38-.4-1.73-1H11c1.65 0 3-1.35 3-3Z"
      />
    </svg>
  );
}
export default FolderMultiple;
