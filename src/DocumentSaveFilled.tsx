import React, { SVGProps } from "react";

export function DocumentSaveFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H11v-5.586A2 2 0 0 0 10.414 11L9 9.586A2 2 0 0 0 7.586 9H4V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM2 10h1v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-2.41a1 1 0 0 1 .293.203l1.414 1.414a1 1 0 0 1 .293.707V18a1 1 0 0 1-1 1v-4.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5V19a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Zm6 5v4H3v-4h5Zm-4-5h3v2H4v-2Z"
      />
    </svg>
  );
}
export default DocumentSaveFilled;
