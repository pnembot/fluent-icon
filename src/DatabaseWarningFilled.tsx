import React, { SVGProps } from "react";

export function DatabaseWarningFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16 5c0 1.657-2.686 3-6 3S4 6.657 4 5s2.686-3 6-3s6 1.343 6 3Zm-1.31 3.016c.104-.052.208-.108.31-.166v.213a1.967 1.967 0 0 0-1.288 1.044l-3.495 6.997a1.983 1.983 0 0 0 .056 1.893c-.09.002-.181.003-.273.003c-3.314 0-6-1.343-6-3V7.12c.383.362.84.661 1.31.896C6.562 8.642 8.222 9 10 9c1.778 0 3.438-.358 4.69-.984Zm-.087 1.538l-3.496 6.998A1 1 0 0 0 12.002 18h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0Zm1.395 1.941v3.002a.5.5 0 1 1-1 0v-3.002a.5.5 0 1 1 1 0Zm-.5 5.504a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default DatabaseWarningFilled;
