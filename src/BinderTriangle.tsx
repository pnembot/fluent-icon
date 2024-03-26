import React, { SVGProps } from "react";

export function BinderTriangle(props: SVGProps<SVGSVGElement>) {
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
        d="M3 4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1.896l-1 1.19V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1h.5a.5.5 0 0 1 0 1H4v3h.5a.5.5 0 0 1 0 1H4v3h.5a.5.5 0 0 1 0 1H4a1 1 0 0 0 1 1h2.194l-.84 1H5a2 2 0 0 1-2-2h-.5a.5.5 0 0 1 0-1H3V9h-.5a.5.5 0 0 1 0-1H3V5h-.5a.5.5 0 0 1 0-1H3Zm12.003 7.61a.25.25 0 0 0-.441-.161l-2.64 3.145a.25.25 0 0 0 .192.41h2.137a.75.75 0 0 0 .75-.75l.002-2.644Zm2.993-6.859c0-.7-.874-1.018-1.324-.482L6.176 16.767A.75.75 0 0 0 6.75 18h9.246a2 2 0 0 0 2-2V4.75Zm-1 .687v10.561a1 1 0 0 1-1 1h-8.71l9.71-11.561ZM6 6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default BinderTriangle;
