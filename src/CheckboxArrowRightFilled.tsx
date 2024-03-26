import React, { SVGProps } from "react";

export function CheckboxArrowRightFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4.207A5.5 5.5 0 0 1 16 9.207V5a3 3 0 0 0-3-3H5Zm7.854 4.854l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 10.793l4.646-4.647a.5.5 0 0 1 .708.708ZM14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm2.353 4.854l.003-.003a.499.499 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default CheckboxArrowRightFilled;
