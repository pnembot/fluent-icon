import React, { SVGProps } from "react";

export function ChartPersonFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10.5 2.5a.5.5 0 1 0-1 0V3H4.75A2.75 2.75 0 0 0 2 5.75v6.502a2.75 2.75 0 0 0 2.75 2.75h1.816l-1.482 2.223a.5.5 0 0 0 .832.555l1.852-2.778h2.244V15H11.5a2.497 2.497 0 0 1 1.773-.99a3 3 0 1 1 4.728-3.668V5.751A2.752 2.752 0 0 0 15.25 3H10.5v-.5ZM5 6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm.5 4.502h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1Zm0-2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM17.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5Z"
      />
    </svg>
  );
}
export default ChartPersonFilled;
