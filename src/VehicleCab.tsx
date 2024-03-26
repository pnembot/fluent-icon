import React, { SVGProps } from "react";

export function VehicleCab(props: SVGProps<SVGSVGElement>) {
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
        d="M7 12a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm8 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0ZM7 3h-.86a2.5 2.5 0 0 0-2.452 2.01L3.49 6h-.74a.75.75 0 0 0 0 1.5h.44l-.111.56A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16H4v1a1 1 0 1 0 2 0v-1h8v1a1 1 0 1 0 2 0v-1h.5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.079-1.44l-.112-.56h.441l.102-.007A.75.75 0 0 0 18 6.75l-.007-.102A.75.75 0 0 0 17.25 6h-.741l-.197-.99A2.5 2.5 0 0 0 13.86 3H13V1.75a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75V3Zm1 0V2h4v1H8ZM3.5 9h13a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5Zm2.64-5h7.72a1.5 1.5 0 0 1 1.471 1.206L15.891 8H4.11l.559-2.794A1.5 1.5 0 0 1 6.139 4Z"
      />
    </svg>
  );
}
export default VehicleCab;