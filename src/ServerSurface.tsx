import React, { SVGProps } from "react";

export function ServerSurface(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="m13.968 14.324l-1.5-4A.5.5 0 0 0 12 10h-1V2.5A1.5 1.5 0 0 0 9.5 1h-4A1.5 1.5 0 0 0 4 2.5V10H3a.5.5 0 0 0-.468.324l-1.5 4A.5.5 0 0 0 1.5 15h12a.5.5 0 0 0 .468-.676ZM5 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-9ZM2.222 14l1.125-3H4v.5A1.5 1.5 0 0 0 5.5 13h4a1.5 1.5 0 0 0 1.5-1.5V11h.653l1.125 3H2.222ZM6 4.5a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h2a.5.5 0 1 1 0 1h-2a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default ServerSurface;
