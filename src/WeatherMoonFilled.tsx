import React, { SVGProps } from "react";

export function WeatherMoonFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M16.36 13.997a7.981 7.981 0 0 1-13.485.541a.599.599 0 0 1 .292-.903c3.006-1.076 4.616-2.323 5.55-4.107c.984-1.877 1.238-3.934.55-6.753a.599.599 0 0 1 .614-.74a7.981 7.981 0 0 1 6.478 11.962Z"
      />
    </svg>
  );
}
export default WeatherMoonFilled;
