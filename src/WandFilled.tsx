import React, { SVGProps } from "react";

export function WandFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M17 2.5a.5.5 0 0 0-1 0V3h-.5a.5.5 0 0 0 0 1h.5v.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1H17v-.5Zm-10 3a.5.5 0 0 1-.5.5H6v.5a.5.5 0 0 1-1 0V6h-.5a.5.5 0 0 1 0-1H5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 .5.5Zm9 9a.5.5 0 0 1-.5.5H15v.5a.5.5 0 0 1-1 0V15h-.5a.5.5 0 0 1 0-1h.5v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 .5.5Zm-2.565-7.934a1.914 1.914 0 0 0-2.708 0l-.477.477l2.707 2.707l.478-.477a1.914 1.914 0 0 0 0-2.707Zm-1.185 3.891L9.543 7.75l-6.982 6.982a1.914 1.914 0 1 0 2.707 2.707l6.982-6.982Z"
      />
    </svg>
  );
}
export default WandFilled;
