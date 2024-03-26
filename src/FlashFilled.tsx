import React, { SVGProps } from "react";

export function FlashFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7.212 2c-.474 0-.89.314-1.021.77l-2.25 7.874a1.062 1.062 0 0 0 1.022 1.354H6.23l-1.17 4.68c-.264 1.055 1.041 1.777 1.796.995l8.676-8.858l.004-.004c.64-.667.18-1.811-.767-1.811h-2.564l1.262-3.594l.002-.008A1.062 1.062 0 0 0 12.461 2H7.212Z"
      />
    </svg>
  );
}
export default FlashFilled;
