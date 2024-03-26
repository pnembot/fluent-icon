import React, { SVGProps } from "react";

export function City(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2a.5.5 0 0 1 .5.5V4h1A1.5 1.5 0 0 1 13 5.5V9h2.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-6.184a1.5 1.5 0 0 1 .728-1.286l3-1.8A1.54 1.54 0 0 1 7 7.1V5.5A1.5 1.5 0 0 1 8.5 4h1V2.5A.5.5 0 0 1 10 2ZM8 7.101c.563.202 1 .732 1 1.415V17h2v-6.5a1.5 1.5 0 0 1 1-1.415V5.501a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1.6ZM12.5 10a.5.5 0 0 0-.5.5V17h3.5a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-3ZM7.243 8.087l-3 1.8a.5.5 0 0 0-.243.43V16.5a.5.5 0 0 0 .5.5H8V8.516a.5.5 0 0 0-.757-.429Z"
      />
    </svg>
  );
}
export default City;