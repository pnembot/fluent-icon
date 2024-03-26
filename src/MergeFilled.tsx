import React, { SVGProps } from "react";

export function MergeFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M3 5.75A.75.75 0 0 1 3.75 5h1.757A3.75 3.75 0 0 1 8.16 6.098l2.493 2.493a2.25 2.25 0 0 0 1.59.659h3.197l-2.97-2.97a.75.75 0 0 1 1.061-1.06l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06l2.97-2.97h-3.197a2.25 2.25 0 0 0-1.591.659L8.16 13.902A3.75 3.75 0 0 1 5.507 15H3.75a.75.75 0 0 1 0-1.5h1.757a2.25 2.25 0 0 0 1.591-.659l2.493-2.493c.126-.126.26-.242.402-.348a3.75 3.75 0 0 1-.402-.348L7.098 7.159a2.25 2.25 0 0 0-1.59-.659H3.75A.75.75 0 0 1 3 5.75Z"
      />
    </svg>
  );
}
export default MergeFilled;
