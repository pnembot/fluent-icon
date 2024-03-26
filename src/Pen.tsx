import React, { SVGProps } from "react";

export function Pen(props: SVGProps<SVGSVGElement>) {
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
        d="M17.18 2.926a2.975 2.975 0 0 0-4.26-.054l-9.375 9.375a2.437 2.437 0 0 0-.655 1.194l-.878 3.95a.5.5 0 0 0 .597.597l3.926-.873a2.518 2.518 0 0 0 1.234-.678l7.98-7.98l.337.336a1 1 0 0 1 0 1.414l-.94.94a.5.5 0 0 0 .708.706l.939-.94a2 2 0 0 0 0-2.828l-.336-.336l.67-.67a2.975 2.975 0 0 0 .052-4.153Zm-3.553.653a1.975 1.975 0 0 1 2.793 2.793L7.062 15.73a1.518 1.518 0 0 1-.744.409l-3.16.702l.708-3.183a1.43 1.43 0 0 1 .387-.704l9.374-9.375Z"
      />
    </svg>
  );
}
export default Pen;
