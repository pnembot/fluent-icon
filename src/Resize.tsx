import React, { SVGProps } from "react";

export function Resize(props: SVGProps<SVGSVGElement>) {
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
        d="M5 2a3 3 0 0 0-3 3v3.5a.5.5 0 0 0 1 0V5a2 2 0 0 1 2-2h3.5a.5.5 0 0 0 0-1H5Zm6.5 0a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v3.5a.5.5 0 0 0 1 0V5a3 3 0 0 0-3-3h-3.5Zm-9 9a.5.5 0 0 1 .5.5V15a2 2 0 0 0 2 2h3.5a.5.5 0 0 1 0 1H5a3 3 0 0 1-3-3v-3.5a.5.5 0 0 1 .5-.5Zm15.5.5a.5.5 0 0 0-1 0V15a2 2 0 0 1-2 2h-3.5a.5.5 0 0 0 0 1H15a3 3 0 0 0 3-3v-3.5Z"
      />
    </svg>
  );
}
export default Resize;
