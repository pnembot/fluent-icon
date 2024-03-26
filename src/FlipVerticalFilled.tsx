import React, { SVGProps } from "react";

export function FlipVerticalFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M15.66 2.122a.75.75 0 0 1 .34.628v5.5a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1-.302-1.436l12.5-5.5a.75.75 0 0 1 .712.058ZM6.317 7.5H14.5V3.9L6.317 7.5ZM16 17.5a.5.5 0 0 1-.71.454l-13-6A.5.5 0 0 1 2.5 11h13a.5.5 0 0 1 .5.5v6Z"
      />
    </svg>
  );
}
export default FlipVerticalFilled;
