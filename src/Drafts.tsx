import React, { SVGProps } from "react";

export function Drafts(props: SVGProps<SVGSVGElement>) {
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
        d="M13.245 2.817L3.64 12.423l-.117.128a2 2 0 0 0-.398.76l-1.106 4.055l-.015.08a.5.5 0 0 0 .63.534l4.054-1.106l.165-.053c.271-.1.518-.257.723-.462l9.606-9.606l.13-.14a2.783 2.783 0 0 0-4.066-3.796ZM4.346 13.13l8.039-8.038l2.521 2.521l-8.038 8.038l-.098.086l-.107.072a1 1 0 0 1-.239.1l-3.212.876l.877-3.211l.042-.123a1 1 0 0 1 .215-.321Zm12.128-9.606l.11.12c.584.7.547 1.744-.11 2.402l-.861.86l-2.521-2.521l.86-.86l.12-.11a1.783 1.783 0 0 1 2.402.11ZM11.648 3H2.5a.5.5 0 0 0 0 1h8.148l1-1Zm-3 3H2.5a.5.5 0 0 0 0 1h5.148l1-1Zm-4 4l1-1H2.5a.5.5 0 0 0 0 1h2.148Z"
      />
    </svg>
  );
}
export default Drafts;
