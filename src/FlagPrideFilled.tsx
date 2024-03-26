import React, { SVGProps } from "react";

export function FlagPrideFilled(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <g fill="none">
        <path fill="#745125" d="M4 4h12v1H4z" />
        <path fill="#E62C46" d="M4 5h12v1H4z" />
        <path fill="#F36D38" d="M4 6h12v1H4z" />
        <path fill="#FFD23E" d="M4 7h12v1H4z" />
        <path fill="#61BC51" d="M4 8h12v1H4z" />
        <path fill="#1793E8" d="M4 9h12v1H4z" />
        <path fill="#B73FBB" d="M4 10h12v1H4z" />
        <path
          d="M3.5 3h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H4v5.5a.5.5 0 0 1-1 0v-14a.5.5 0 0 1 .5-.5zM4 4v7h12V4H4z"
          fill="#212121"
        />
      </g>
    </svg>
  );
}
export default FlagPrideFilled;
