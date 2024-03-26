import React, { SVGProps } from "react";

export function Multiplier5x(props: SVGProps<SVGSVGElement>) {
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
        d="M7 6a.5.5 0 0 0-.498.458l-.25 3a.5.5 0 0 0 .556.539l1.885-.222A1.618 1.618 0 1 1 8.882 13h-.357a1.975 1.975 0 0 1-1.396-.578l-.275-.276a.5.5 0 0 0-.708.708l.276.275A2.975 2.975 0 0 0 8.525 14h.357a2.618 2.618 0 1 0-.306-5.218l-1.277.15L7.46 7h3.04a.5.5 0 0 0 0-1H7Zm5.146 4.146a.5.5 0 0 1 .708 0L14 11.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 12l1.147 1.146a.5.5 0 0 1-.708.708L14 12.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 12l-1.147-1.146a.5.5 0 0 1 0-.708ZM5 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default Multiplier5x;
