import React, { SVGProps } from "react";

export function Bed(props: SVGProps<SVGSVGElement>) {
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
        d="M13.5 3a2.5 2.5 0 0 1 2.495 2.336L16 5.5v2.55a2.501 2.501 0 0 1 1.994 2.279L18 10.5v6a.5.5 0 0 1-.992.09L17 16.5V14H3v2.5a.5.5 0 0 1-.992.09L2 16.5v-6a2.5 2.5 0 0 1 2-2.45V5.5a2.5 2.5 0 0 1 2.336-2.495L6.5 3h7Zm2 6h-11a1.5 1.5 0 0 0-1.493 1.355L3 10.5V13h14v-2.5a1.5 1.5 0 0 0-1.355-1.493L15.5 9Zm-2-5h-7a1.5 1.5 0 0 0-1.493 1.356L5 5.5V8h1v-.5a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 .5.5V8h1v-.5A.5.5 0 0 1 11 7h2.5a.5.5 0 0 1 .5.5V8h1V5.5a1.5 1.5 0 0 0-1.355-1.493L13.5 4Z"
      />
    </svg>
  );
}
export default Bed;
