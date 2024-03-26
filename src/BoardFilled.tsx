import React, { SVGProps } from "react";

export function BoardFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M9.5 3v4H3V6a3 3 0 0 1 3-3h3.5Zm1 0v9H17V6a3 3 0 0 0-3-3h-3.5ZM17 13h-6.5v4H14a3 3 0 0 0 3-3v-1Zm-7.5 4V8H3v6a3 3 0 0 0 3 3h3.5Z"
      />
    </svg>
  );
}
export default BoardFilled;
