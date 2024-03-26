import React, { SVGProps } from "react";

export function Badge(props: SVGProps<SVGSVGElement>) {
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
        d="M16 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm1 9V6.83c-.313.11-.65.17-1 .17v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h8c0-.35.06-.687.17-1H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Z"
      />
    </svg>
  );
}
export default Badge;
