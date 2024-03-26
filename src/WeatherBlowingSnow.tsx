import React, { SVGProps } from "react";

export function WeatherBlowingSnow(props: SVGProps<SVGSVGElement>) {
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
        d="M4 4.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM9.752 3.5a3.248 3.248 0 0 0-3.184 2.61l-.058.292a.5.5 0 1 0 .98.196l.059-.291A2.248 2.248 0 0 1 12 6.749A2.251 2.251 0 0 1 9.75 9H2.5a.5.5 0 1 0 0 1h7.25a3.251 3.251 0 0 0 .002-6.5ZM15.5 8a2.5 2.5 0 0 0-2.5 2.5a.5.5 0 0 0 1 0a1.5 1.5 0 1 1 1.5 1.5h-13a.5.5 0 1 0 0 1h9.75a1.25 1.25 0 1 1-.005 2.5a1.264 1.264 0 0 1-1.247-1.052l-.005-.03a.5.5 0 1 0-.986.164l.005.03a2.264 2.264 0 0 0 2.233 1.888a2.254 2.254 0 0 0 2.255-2.25c0-.463-.14-.893-.379-1.25H15.5a2.5 2.5 0 0 0 0-5Zm-7.75 8a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM16 5.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default WeatherBlowingSnow;