import React, { SVGProps } from "react";

export function FlashAutoFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7.212 2c-.474 0-.891.314-1.021.77l-2.25 7.874a1.062 1.062 0 0 0 1.021 1.354H6.23l-1.17 4.68c-.264 1.055 1.04 1.777 1.795.995l4.826-4.927l1.415-3.773a1.5 1.5 0 0 1 2.6-.378C16.079 7.923 15.62 7 14.77 7h-2.564l1.261-3.594l.003-.008A1.062 1.062 0 0 0 12.461 2H7.212ZM14.5 9a.5.5 0 0 1 .468.324l3 8a.5.5 0 1 1-.936.352L16.029 15h-3.057l-1.004 2.676a.5.5 0 0 1-.936-.352l3-8A.5.5 0 0 1 14.5 9Zm1.154 5L14.5 10.924L13.347 14h2.307Z"
      />
    </svg>
  );
}
export default FlashAutoFilled;
