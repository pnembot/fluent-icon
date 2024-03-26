import React, { SVGProps } from "react";

export function SleepFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M11.158 2.739a.5.5 0 0 1 .427-.128c3.508.607 6.41 3.667 6.41 7.39a7.5 7.5 0 0 1-7.5 7.5c-2.53 0-5.04-1.257-6.405-3.214a.5.5 0 0 1 .37-.785c1.515-.121 3.34-.932 4.69-2.591c1.342-1.649 2.242-4.169 1.853-7.754a.5.5 0 0 1 .155-.418ZM3.5 10A1.5 1.5 0 0 0 5 8.5V4.89l3-.75v1.946A1.5 1.5 0 1 0 9 7.5v-4a.5.5 0 0 0-.621-.486l-4 1A.5.5 0 0 0 4 4.5v2.586A1.5 1.5 0 1 0 3.5 10Z"
      />
    </svg>
  );
}
export default SleepFilled;
