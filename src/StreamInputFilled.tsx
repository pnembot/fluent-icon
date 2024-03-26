import React, { SVGProps } from "react";

export function StreamInputFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7.5 9.25a5.75 5.75 0 0 1 5.75-5.75h.5a.75.75 0 0 0 0-1.5h-.5A7.25 7.25 0 0 0 6 9.25v1a.75.75 0 0 1-.75.75H4.9l1.294 1.293A2.25 2.25 0 0 0 7.5 10.25v-1Zm-1.097 7.248l-1.23 1.23A.748.748 0 0 0 5.75 18h.5a7.25 7.25 0 0 0 7.25-7.25v-1a.75.75 0 0 1 .75-.75h3a.75.75 0 0 0 0-1.5h-3A2.25 2.25 0 0 0 12 9.75v1a5.75 5.75 0 0 1-5.597 5.748Zm.788-3.084a2.22 2.22 0 0 1 .24 1.53A4.752 4.752 0 0 0 10.5 10.5v-1a3.25 3.25 0 0 1 3.25-3.25h3.5a.75.75 0 0 0 0-1.5h-3.5A4.75 4.75 0 0 0 9 9.5v1a3.25 3.25 0 0 1-1.809 2.914ZM1.72 10.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72H.75a.75.75 0 0 1 0-1.5h2.69l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
        opacity=".79"
      />
    </svg>
  );
}
export default StreamInputFilled;
