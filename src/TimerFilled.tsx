import React, { SVGProps } from "react";

export function TimerFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M7 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm7.45 1.429a.5.5 0 0 1 .706 0l1.414 1.414a.5.5 0 1 1-.707.707L14.45 4.636a.5.5 0 0 1 0-.707ZM16.5 11a7 7 0 1 1-14 0a7 7 0 0 1 14 0ZM9 6.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0Z"
      />
    </svg>
  );
}
export default TimerFilled;
