import React, { SVGProps } from "react";

export function DropFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M9.646 2.146a.5.5 0 0 1 .708 0c.531.532 1.804 2.064 2.946 3.903c1.13 1.82 2.2 4.05 2.2 5.951c0 1.844-.528 3.352-1.51 4.404C13.007 17.459 11.616 18 10 18c-1.615 0-3.006-.541-3.99-1.596C5.027 15.352 4.5 13.844 4.5 12c0-1.902 1.07-4.13 2.2-5.951c1.142-1.84 2.415-3.37 2.946-3.903Z"
      />
    </svg>
  );
}
export default DropFilled;
