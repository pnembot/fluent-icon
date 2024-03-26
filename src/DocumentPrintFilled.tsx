import React, { SVGProps } from "react";

export function DocumentPrintFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H9a2 2 0 0 0 2-2v-2.5a2.5 2.5 0 0 0-2.042-2.458A2.5 2.5 0 0 0 6.5 9h-2c-.171 0-.338.017-.5.05V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM4.5 10A1.5 1.5 0 0 0 3 11.5v.5h-.5A1.5 1.5 0 0 0 1 13.5V16a1 1 0 0 0 1 1h1v.5A1.5 1.5 0 0 0 4.5 19h2A1.5 1.5 0 0 0 8 17.5V17h1a1 1 0 0 0 1-1v-2.5A1.5 1.5 0 0 0 8.5 12H8v-.5A1.5 1.5 0 0 0 6.5 10h-2ZM7 12H4v-.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v.5Zm-2.5 4h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default DocumentPrintFilled;