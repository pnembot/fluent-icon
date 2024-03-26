import React, { SVGProps } from "react";

export function DocumentQueueAdd(props: SVGProps<SVGSVGElement>) {
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
        d="M10.494 2H5.75A1.75 1.75 0 0 0 4 3.75v10.5c0 .966.784 1.75 1.75 1.75h3.457a5.48 5.48 0 0 1-.185-1H5.75a.75.75 0 0 1-.75-.75V3.75A.75.75 0 0 1 5.75 3H10v3.5A1.5 1.5 0 0 0 11.5 8H15v1.022a5.5 5.5 0 0 1 1 .185V7.48a1.75 1.75 0 0 0-.513-1.2L11.72 2.513A1.75 1.75 0 0 0 10.5 2h-.006ZM11 3.207l.013.013l3.767 3.767l.013.013H11.5a.5.5 0 0 1-.5-.5V3.207ZM5.5 17h4.1c.183.358.404.693.657 1H5.5A3.5 3.5 0 0 1 2 14.5v-1a.5.5 0 0 1 1 0v1A2.5 2.5 0 0 0 5.5 17ZM6 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5ZM6.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm0 2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default DocumentQueueAdd;