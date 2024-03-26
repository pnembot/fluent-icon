import React, { SVGProps } from "react";

export function TextDescriptionRtl(props: SVGProps<SVGSVGElement>) {
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
        d="M17.5 5a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm0 3a.5.5 0 0 1 0 1h-15a.5.5 0 0 1 0-1h15Zm.5 3.5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 .5-.5Zm-.5 2.5a.5.5 0 0 1 0 1h-10a.5.5 0 0 1 0-1h10Z"
      />
    </svg>
  );
}
export default TextDescriptionRtl;
