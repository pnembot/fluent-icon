import React, { SVGProps } from "react";

export function TvFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm3.5 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z"
      />
    </svg>
  );
}
export default TvFilled;
