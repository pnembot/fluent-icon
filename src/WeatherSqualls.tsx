import React, { SVGProps } from "react";

export function WeatherSqualls(props: SVGProps<SVGSVGElement>) {
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
        d="M6.568 6.11A3.248 3.248 0 0 1 13 6.75A3.251 3.251 0 0 1 9.75 10H2.5a.5.5 0 1 1 0-1h7.25a2.251 2.251 0 0 0 .002-4.5A2.248 2.248 0 0 0 7.55 6.307l-.059.291a.5.5 0 1 1-.98-.196l.058-.291ZM13 10.5a2.5 2.5 0 1 1 2.5 2.5h-1.38c.24.357.379.787.379 1.25a2.254 2.254 0 0 1-2.255 2.25a2.264 2.264 0 0 1-2.233-1.888l-.005-.03a.5.5 0 1 1 .986-.164l.005.03c.101.605.63 1.052 1.247 1.052a1.25 1.25 0 1 0 .005-2.5H2.5a.5.5 0 0 1 0-1h13a1.5 1.5 0 1 0-1.5-1.5a.5.5 0 0 1-1 0Z"
      />
    </svg>
  );
}
export default WeatherSqualls;