import React, { SVGProps } from "react";

export function FolderArrowRight(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 3A2.5 2.5 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h5.1a5.465 5.465 0 0 1-.393-1H4.5A1.5 1.5 0 0 1 3 14.5v-7h4.071a1.5 1.5 0 0 0 1.087-.466L9.619 5.5H15.5A1.5 1.5 0 0 1 17 7v2.6c.358.183.693.404 1 .657V7a2.5 2.5 0 0 0-2.5-2.5H9.667l-1.6-1.2a1.5 1.5 0 0 0-.9-.3H4.5ZM3 5.5A1.5 1.5 0 0 1 4.5 4h2.667a.5.5 0 0 1 .3.1l1.227.92l-1.26 1.325a.5.5 0 0 1-.363.155H3v-1ZM14.5 10a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm2.353 4.854l.003-.003a.499.499 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default FolderArrowRight;