import React, { SVGProps } from "react";

export function ClipboardPaste(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 4h1.585A1.5 1.5 0 0 0 7.5 5h3a1.5 1.5 0 0 0 1.415-1H13.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 0 1 0v-1A1.5 1.5 0 0 0 13.5 3h-1.585A1.5 1.5 0 0 0 10.5 2h-3a1.5 1.5 0 0 0-1.415 1H4.5A1.5 1.5 0 0 0 3 4.5v12A1.5 1.5 0 0 0 4.5 18h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5Zm3 0a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3Zm3 3A1.5 1.5 0 0 0 9 8.5v8a1.5 1.5 0 0 0 1.5 1.5h5a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 15.5 7h-5ZM10 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-8Z"
      />
    </svg>
  );
}
export default ClipboardPaste;
