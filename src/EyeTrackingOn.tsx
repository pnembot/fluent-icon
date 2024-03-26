import React, { SVGProps } from "react";

export function EyeTrackingOn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path
          d="M3 4.5A1.5 1.5 0 0 1 4.5 3h3a.5.5 0 0 0 0-1h-3A2.5 2.5 0 0 0 2 4.5v3a.5.5 0 0 0 1 0v-3z"
          fill="currentColor"
        />
        <path
          d="M3 15.5A1.5 1.5 0 0 0 4.5 17h3a.5.5 0 0 1 0 1h-3A2.5 2.5 0 0 1 2 15.5v-3a.5.5 0 0 1 1 0v3z"
          fill="currentColor"
        />
        <path
          d="M15.5 3A1.5 1.5 0 0 1 17 4.5v3a.5.5 0 0 0 1 0v-3A2.5 2.5 0 0 0 15.5 2h-3a.5.5 0 0 0 0 1h3z"
          fill="currentColor"
        />
        <path
          d="M17 15.5a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 0 0 1h3a2.5 2.5 0 0 0 2.5-2.5v-3a.5.5 0 0 0-1 0v3z"
          fill="currentColor"
        />
        <path
          d="M7 11.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4z"
          fill="currentColor"
        />
        <path
          d="M4.948 9.723v.001a.5.5 0 0 1-.895-.448L4.5 9.5a24.558 24.558 0 0 1-.447-.225l.001-.001l.002-.004l.005-.01a2.106 2.106 0 0 1 .082-.145a5.14 5.14 0 0 1 .249-.377A6.49 6.49 0 0 1 5.425 7.62C6.375 6.805 7.863 6 10 6s3.624.805 4.575 1.62c.473.406.812.812 1.034 1.119a5.13 5.13 0 0 1 .33.521l.005.01l.002.004l.001.002l-.447.224l.447-.224a.5.5 0 0 1-.893.45v-.002l-.002-.001l-.009-.018a4.133 4.133 0 0 0-.245-.381a5.487 5.487 0 0 0-.873-.944C13.125 7.695 11.863 7 10 7s-3.125.695-3.924 1.38a5.49 5.49 0 0 0-.874.944a4.14 4.14 0 0 0-.245.381l-.01.018z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default EyeTrackingOn;