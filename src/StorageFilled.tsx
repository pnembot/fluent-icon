import React, { SVGProps } from "react";

export function StorageFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M2 8.5A2.5 2.5 0 0 1 4.5 6h11A2.5 2.5 0 0 1 18 8.5v3a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 11.5v-3ZM13 9a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm3 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Z"
      />
    </svg>
  );
}
export default StorageFilled;
