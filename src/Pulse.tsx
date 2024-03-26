import React, { SVGProps } from "react";

export function Pulse(props: SVGProps<SVGSVGElement>) {
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
        d="M7.004 3a.5.5 0 0 1 .479.37l3.043 11.303l2.495-8.317a.5.5 0 0 1 .947-.032L15.347 10H17.5a.5.5 0 0 1 0 1H15a.5.5 0 0 1-.468-.324l-.98-2.612l-2.573 8.58a.5.5 0 0 1-.962-.014L6.986 5.37L5.48 10.637A.5.5 0 0 1 5 11H2.5a.5.5 0 0 1 0-1h2.123l1.896-6.637A.5.5 0 0 1 7.004 3Z"
      />
    </svg>
  );
}
export default Pulse;
