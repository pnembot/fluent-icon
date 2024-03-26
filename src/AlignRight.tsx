import React, { SVGProps } from "react";

export function AlignRight(props: SVGProps<SVGSVGElement>) {
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
        d="M16.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5ZM13 11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h5Zm1 2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-1Zm1-7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6Zm-2-1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h8Z"
      />
    </svg>
  );
}
export default AlignRight;