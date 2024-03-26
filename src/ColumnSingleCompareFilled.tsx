import React, { SVGProps } from "react";

export function ColumnSingleCompareFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M6 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6ZM5 6h10v1H5V6Zm0 5h10v3H5v-3Z"
      />
    </svg>
  );
}
export default ColumnSingleCompareFilled;
