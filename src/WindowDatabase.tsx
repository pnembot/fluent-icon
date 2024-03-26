import React, { SVGProps } from "react";

export function WindowDatabase(props: SVGProps<SVGSVGElement>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v1H4v7a2 2 0 0 0 2 2h3v.5c0 .173.018.34.051.5H6a3 3 0 0 1-3-3V6Zm13 2.142A7.81 7.81 0 0 0 14.5 8C12.015 8 10 9.12 10 10.5s2.015 2.5 4.5 2.5s4.5-1.12 4.5-2.5c0-.867-.794-1.63-2-2.079a6.43 6.43 0 0 0-1-.279ZM6 4a2 2 0 0 0-2 2h12a2 2 0 0 0-2-2H6Zm8.5 10c1.38 0 2.678-.309 3.668-.858c.293-.163.578-.36.833-.59L19 16.5c0 1.381-2.015 2.5-4.5 2.5S10 17.88 10 16.5v-3.945c.255.23.54.425.832.588c.99.55 2.288.858 3.668.858Z"
      />
    </svg>
  );
}
export default WindowDatabase;
