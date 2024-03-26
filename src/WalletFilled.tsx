import React, { SVGProps } from "react";

export function WalletFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M4.5 3A1.5 1.5 0 0 0 3 4.5v10A2.5 2.5 0 0 0 5.5 17H15a2 2 0 0 0 2-2V7a2 2 0 0 0-1-1.732V5a2 2 0 0 0-2-2H4.5ZM15 5H4.5a.5.5 0 0 1 0-1H14a1 1 0 0 1 1 1Zm-1.5 6h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default WalletFilled;
