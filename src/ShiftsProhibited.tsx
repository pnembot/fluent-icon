import React, { SVGProps } from "react";

export function ShiftsProhibited(props: SVGProps<SVGSVGElement>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.6c.162-.317.294-.651.393-1H14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3.207c-.349.099-.683.23-1 .393V6Zm7.5 0a.5.5 0 0 1 .5.5V9h1.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5ZM1 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.484 3.484 0 0 1 2 14.5ZM5.5 18c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 5.5 18Z"
      />
    </svg>
  );
}
export default ShiftsProhibited;