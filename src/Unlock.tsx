import React, { SVGProps } from "react";

export function Unlock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        d="M9.997 2c1.44 0 2.666 1.01 2.944 2.402a.5.5 0 1 1-.98.196A1.995 1.995 0 0 0 9.996 3c-1.055 0-1.92.817-1.996 1.853l-.006.15V7H14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h.995V5.002A3.002 3.002 0 0 1 9.997 2zM14 8H6a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-4 3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default Unlock;
