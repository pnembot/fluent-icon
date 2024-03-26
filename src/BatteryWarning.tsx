import React, { SVGProps } from "react";

export function BatteryWarning(props: SVGProps<SVGSVGElement>) {
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
        d="M13.5 5A2.5 2.5 0 0 1 16 7.5v.833l1.167.003a.833.833 0 0 1 .833.833v1.667a.833.833 0 0 1-.833.833L16 11.667v.833a2.5 2.5 0 0 1-2.5 2.5h-2.26l-.53-1.059h3.04a1.25 1.25 0 0 0 1.243-1.122l.007-.128V7.196a1.25 1.25 0 0 0-1.122-1.244l-.128-.006H4.5c-.65 0-1.405.496-1.492 1.13L3 7.196v5.34l-.633 1.269A2.489 2.489 0 0 1 2 12.5v-5A2.5 2.5 0 0 1 4.5 5h9ZM5.603 9.554l-3.496 6.998A1 1 0 0 0 3.002 18h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0Zm1.395 1.941v3.002a.5.5 0 1 1-1 0v-3.002a.5.5 0 1 1 1 0ZM6.498 17a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default BatteryWarning;
