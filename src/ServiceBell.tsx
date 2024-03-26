import React, { SVGProps } from "react";

export function ServiceBell(props: SVGProps<SVGSVGElement>) {
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
        d="M10.5 8.5c.422 0 .84.004 1.268.158c.413.148.87.451 1.316 1.12a.5.5 0 0 0 .832-.555c-.555-.832-1.18-1.28-1.81-1.506C11.505 7.5 10.93 7.5 10.52 7.5h-.02a.5.5 0 0 0 0 1ZM8 5v.79c-2.891.86-5 3.539-5 6.71a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5a7.003 7.003 0 0 0-5-6.71V5a2 2 0 1 0-4 0Zm2-1a1 1 0 0 1 1 1v.57a7.06 7.06 0 0 0-2 0V5a1 1 0 0 1 1-1Zm0 2.5a6 6 0 0 1 5.98 5.5H4.02A6 6 0 0 1 10 6.5ZM3.5 14a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 0 0 0-3h-13ZM3 15.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default ServiceBell;
