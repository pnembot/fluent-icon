import React, { SVGProps } from "react";

export function Gas(props: SVGProps<SVGSVGElement>) {
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
        d="M11.084 2.223A.5.5 0 0 1 11.5 2h3a.5.5 0 0 1 .5.5v3c.607.456 1 1.182 1 2v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 14.5v-7A2.5 2.5 0 0 1 6.5 5h.415A1.5 1.5 0 0 0 5.5 4h-1a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 1 2.45 2h1.282l1.852-2.777ZM14 3h-2.232l-1.334 2H13.5c.171 0 .338.017.5.05V3ZM6.5 6A1.5 1.5 0 0 0 5 7.5v7A1.5 1.5 0 0 0 6.5 16h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 6h-7Zm6.354 2.146a.5.5 0 0 1 0 .708L10.707 11l2.147 2.146a.5.5 0 0 1-.708.708L10 11.707l-2.146 2.147a.5.5 0 0 1-.708-.708L9.293 11L7.146 8.854a.5.5 0 1 1 .708-.708L10 10.293l2.146-2.147a.5.5 0 0 1 .708 0Z"
      />
    </svg>
  );
}
export default Gas;
