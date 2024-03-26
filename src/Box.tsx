import React, { SVGProps } from "react";

export function Box(props: SVGProps<SVGSVGElement>) {
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
        d="M11.3 2.48a3.5 3.5 0 0 0-2.6 0L2.943 4.785A1.5 1.5 0 0 0 2 6.176v7.646a1.5 1.5 0 0 0 .943 1.393L8.7 17.518a3.5 3.5 0 0 0 2.6 0l5.757-2.303A1.5 1.5 0 0 0 18 13.822V6.176a1.5 1.5 0 0 0-.943-1.392L11.3 2.48Zm-2.228.93a2.5 2.5 0 0 1 1.857 0l5.225 2.09l-2.279.91l-6.154-2.46l1.35-.54ZM6.375 4.487l6.154 2.461L10 7.961L3.846 5.499l2.529-1.011Zm4.125 4.35l6.5-2.6v7.584a.5.5 0 0 1-.314.465l-5.758 2.303c-.14.055-.283.098-.428.128v-7.88Zm-1 0v7.88a2.508 2.508 0 0 1-.428-.128l-5.758-2.303A.5.5 0 0 1 3 13.822V6.238l6.5 2.6Z"
      />
    </svg>
  );
}
export default Box;
