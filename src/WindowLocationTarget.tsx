import React, { SVGProps } from "react";

export function WindowLocationTarget(props: SVGProps<SVGSVGElement>) {
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
        d="M6 3h8a3 3 0 0 1 3 3v4.758a4.483 4.483 0 0 0-1-.502V7H4v7a2 2 0 0 0 2 2h4.256c.126.356.295.692.502 1H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3ZM4 6h12a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Zm11.056 9.332a1 1 0 1 1-1.111-1.663a1 1 0 0 1 1.11 1.662ZM17.949 14h.551a.5.5 0 0 1 0 1h-.551A3.487 3.487 0 0 1 15 17.949v.551a.5.5 0 0 1-1 0v-.551A3.487 3.487 0 0 1 11.051 15H10.5a.5.5 0 0 1 0-1h.551A3.487 3.487 0 0 1 14 11.051V10.5a.5.5 0 0 1 1 0v.551A3.487 3.487 0 0 1 17.949 14Zm-3.204 2.988a2.5 2.5 0 1 0-.49-4.976a2.5 2.5 0 0 0 .49 4.976Z"
      />
    </svg>
  );
}
export default WindowLocationTarget;