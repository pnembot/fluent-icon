import React, { SVGProps } from "react";

export function PaddingLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M2 3.5a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm0 3a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm0 4a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm0 4a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1Zm2.146-4.646a.5.5 0 0 1 0-.708l4.5-4.5a.5.5 0 1 1 .708.708L5.707 9H15.5a.5.5 0 0 1 0 1H5.707l3.647 3.646a.5.5 0 0 1-.708.708l-4.5-4.5ZM17 3.5a.5.5 0 0 1 1 0v12a.5.5 0 0 1-1 0v-12Z"
      />
    </svg>
  );
}
export default PaddingLeft;
