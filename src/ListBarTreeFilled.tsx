import React, { SVGProps } from "react";

export function ListBarTreeFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M8 7h7.5A1.5 1.5 0 0 0 17 5.5v-1A1.5 1.5 0 0 0 15.5 3H8v4ZM7 3H4.5A1.5 1.5 0 0 0 3 4.5v1A1.5 1.5 0 0 0 4.5 7H7V3Zm3 9h5.5a1.5 1.5 0 0 0 1.5-1.5v-1A1.5 1.5 0 0 0 15.5 8H10v4ZM9 8H6.5A1.5 1.5 0 0 0 5 9.5v1A1.5 1.5 0 0 0 6.5 12H9V8Zm6.5 9H10v-4h5.5a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5Zm-9-4H9v4H6.5A1.5 1.5 0 0 1 5 15.5v-1A1.5 1.5 0 0 1 6.5 13Z"
      />
    </svg>
  );
}
export default ListBarTreeFilled;
