import React, { SVGProps } from "react";

export function NumberSymbol(props: SVGProps<SVGSVGElement>) {
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
        d="M8.99 2.598a.5.5 0 0 0-.98-.196l-.92 4.602H3.5a.5.5 0 1 0 0 1h3.39l-.8 3.993H2.5a.5.5 0 0 0 0 1h3.39l-.88 4.405a.5.5 0 1 0 .98.196l.92-4.601h5.004L11.01 17.4a.5.5 0 0 0 .98.202l.945-4.604h3.568a.5.5 0 0 0 0-1H13.14l.82-3.992h3.54a.5.5 0 1 0 0-1h-3.334l.901-4.391a.5.5 0 1 0-.98-.201l-.942 4.591H8.109l.881-4.406ZM7.91 8.004h5.03l-.82 3.993H7.11l.8-3.993Z"
      />
    </svg>
  );
}
export default NumberSymbol;