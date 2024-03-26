import React, { SVGProps } from "react";

export function NumberSymbolDismiss(props: SVGProps<SVGSVGElement>) {
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
        d="M8.99 2.598a.5.5 0 0 0-.98-.196l-.92 4.602H3.5a.5.5 0 1 0 0 1h3.39l-.8 3.993H2.5a.5.5 0 0 0 0 1h3.39l-.88 4.405a.5.5 0 1 0 .98.196l.92-4.601h2.298c.099-.349.231-.683.393-1h-2.49l.798-3.993h5.03l-.268 1.307a5.55 5.55 0 0 1 1.075-.26l.214-1.046h3.54a.5.5 0 1 0 0-1h-3.334l.901-4.391a.5.5 0 1 0-.98-.201l-.942 4.591H8.109l.881-4.406ZM19 14.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0Zm-2.646-1.146L15.207 14.5l1.147 1.146a.5.5 0 0 1-.708.708L14.5 15.207l-1.146 1.147a.5.5 0 0 1-.708-.708l1.147-1.146l-1.147-1.146a.5.5 0 0 1 .708-.708l1.146 1.147l1.146-1.147a.5.5 0 0 1 .708.708Z"
      />
    </svg>
  );
}
export default NumberSymbolDismiss;
