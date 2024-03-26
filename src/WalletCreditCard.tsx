import React, { SVGProps } from "react";

export function WalletCreditCard(props: SVGProps<SVGSVGElement>) {
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
        d="M10.002 1.642a1.5 1.5 0 0 1 2.175-.307l3.27 2.655A1.5 1.5 0 0 1 15.741 6h-1.22l.39-.559a.5.5 0 0 0-.094-.675L13.133 3.4L11.337 6H10.12l2.234-3.232l-.808-.656a.5.5 0 0 0-.725.102L8.18 5.999H6.96l3.042-4.357ZM13.5 12a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1Zm-9-7h2.169l-.7 1H4.5a.5.5 0 0 0 0 1H15a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 14.5v-8A1.5 1.5 0 0 1 4.5 5ZM4 14.5A1.5 1.5 0 0 0 5.5 16H15a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H4.5c-.175 0-.344-.03-.5-.085V14.5Z"
      />
    </svg>
  );
}
export default WalletCreditCard;
