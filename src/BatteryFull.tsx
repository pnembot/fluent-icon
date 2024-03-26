import React, { SVGProps } from "react";

export function BatteryFull(props: SVGProps<SVGSVGElement>) {
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
          d="M13.5 5.054a2.5 2.5 0 0 1 2.5 2.5v.833l1.167.002a.833.833 0 0 1 .833.833v1.667a.833.833 0 0 1-.833.834L16 11.72v.834a2.5 2.5 0 0 1-2.5 2.5h-9a2.5 2.5 0 0 1-2.5-2.5v-5a2.5 2.5 0 0 1 2.5-2.5h9zm.25.946H4.5c-.65 0-1.405.495-1.492 1.13L3 7.25v5.495c0 .647.492 1.18 1.122 1.244l.128.006h9.5a1.25 1.25 0 0 0 1.243-1.122l.007-.128V7.25a1.25 1.25 0 0 0-1.122-1.244L13.75 6zM4.834 7.002h8.33c.427 0 .778.32.83.731l.006.105v4.326a.835.835 0 0 1-.73.83l-.105.006h-8.33a.836.836 0 0 1-.83-.73L4 12.163V7.838c0-.426.319-.778.73-.83l.105-.006h8.33h-8.33z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
export default BatteryFull;
