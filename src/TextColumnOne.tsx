import React, { SVGProps } from "react";

export function TextColumnOne(props: SVGProps<SVGSVGElement>) {
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
        d="M15 5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Zm0 3a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0 0 1h9a.5.5 0 0 0 .5-.5Z"
      />
    </svg>
  );
}
export default TextColumnOne;
