import React, { SVGProps } from "react";

export function ContractDownLeft(props: SVGProps<SVGSVGElement>) {
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
        d="m12.707 8l4.147-4.146a.5.5 0 0 0-.708-.708L12 7.293V3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-3.793ZM4 6a2 2 0 0 1 2-2h2.5a.5.5 0 0 0 0-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.5a.5.5 0 0 0-1 0V14a2 2 0 0 1-2 2h-4v-4a2 2 0 0 0-2-2H4V6Zm0 5h4a1 1 0 0 1 1 1v4H6a2 2 0 0 1-2-2v-3Z"
      />
    </svg>
  );
}
export default ContractDownLeft;