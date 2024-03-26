import React, { SVGProps } from "react";

export function EmojiFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16ZM7.155 12.427a.5.5 0 1 0-.71.705a5.011 5.011 0 0 0 6.905.194l.205-.194l.057-.07a.5.5 0 0 0-.698-.693l-.069.058l-.178.17a4.011 4.011 0 0 1-5.512-.17ZM12.5 7.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2Zm-5 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z"
      />
    </svg>
  );
}
export default EmojiFilled;
