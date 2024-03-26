import React, { SVGProps } from "react";

export function FolderLink(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h2.258a4.485 4.485 0 0 1-.502-1H4.5A1.5 1.5 0 0 1 3 14.5v-7h4.071a1.5 1.5 0 0 0 1.087-.466L9.619 5.5H15.5A1.5 1.5 0 0 1 17 7v3.256a4.46 4.46 0 0 1 1 .502V7a2.5 2.5 0 0 0-2.5-2.5H9.667l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5ZM3 5.5A1.5 1.5 0 0 1 4.5 4h2.667a.5.5 0 0 1 .3.1l1.227.92l-1.26 1.325a.5.5 0 0 1-.363.155H3v-1Zm5 9a2.5 2.5 0 0 1 2.5-2.5h1a.5.5 0 0 0 0-1h-1a3.5 3.5 0 1 0 0 7h1a.5.5 0 0 0 0-1h-1A2.5 2.5 0 0 1 8 14.5Zm10 0a2.5 2.5 0 0 0-2.5-2.5h-1a.5.5 0 0 1 0-1h1a3.5 3.5 0 1 1 0 7h-1a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 0 2.5-2.5Zm-8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default FolderLink;
