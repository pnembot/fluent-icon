import React, { SVGProps } from "react";

export function ReceiptCube(props: SVGProps<SVGSVGElement>) {
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
        d="M4 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3H9.938a2 2 0 0 0 .062-.496V16h4V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v4a2 2 0 0 0-.894.211L4 9.264V5Zm3.5 5h-.03l-.352-.177A.5.5 0 0 1 7.5 9h4a.5.5 0 0 1 0 1h-4Zm7.5 3v3a2 2 0 0 0 2-2v-1h-2ZM7 6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm1.447 5.106l-3-1.5a1 1 0 0 0-.894 0l-3 1.5A1 1 0 0 0 1 12.5v4.004a1 1 0 0 0 .553.894l3 1.5a1 1 0 0 0 .894 0l3-1.5A1 1 0 0 0 9 16.504V12.5a1 1 0 0 0-.553-.894ZM2.04 12.732a.5.5 0 0 1 .657-.263L5 13.456l2.303-.987a.5.5 0 0 1 .394.92l-2.197.94V17a.5.5 0 1 1-1 0v-2.67l-2.197-.942a.5.5 0 0 1-.263-.656Z"
      />
    </svg>
  );
}
export default ReceiptCube;
