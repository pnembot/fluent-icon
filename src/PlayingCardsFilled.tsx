import React, { SVGProps } from "react";

export function PlayingCardsFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M5.068 13.01a2.005 2.005 0 0 0 1.416 2.451l5.46 1.47a1.995 1.995 0 0 0 2.447-1.413l2.54-9.523a2.005 2.005 0 0 0-1.415-2.452l-5.46-1.47a1.995 1.995 0 0 0-2.447 1.413l-2.54 9.523ZM5 4.001v5.382l1.772-6.64c.072-.272.186-.521.334-.742H7a2 2 0 0 0-2 2ZM2.67 5.506L4 10.469V4.002c0-.338.056-.663.159-.966l-.075.02a2 2 0 0 0-1.414 2.45ZM13 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-3 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
      />
    </svg>
  );
}
export default PlayingCardsFilled;
