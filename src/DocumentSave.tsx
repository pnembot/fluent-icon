import React, { SVGProps } from "react";

export function DocumentSave(props: SVGProps<SVGSVGElement>) {
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
        d="M6 2a2 2 0 0 0-2 2v5h1V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-3v1h3a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM4 10h3v2H4v-2Zm-2 0h1v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-2.41a1 1 0 0 1 .293.203l1.414 1.414a1 1 0 0 1 .293.707V18a1 1 0 0 1-1 1v-4.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5V19a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Zm6 5v4H3v-4h5Z"
      />
    </svg>
  );
}
export default DocumentSave;
