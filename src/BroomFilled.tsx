import React, { SVGProps } from "react";

export function BroomFilled(props: SVGProps<SVGSVGElement>) {
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
        d="M17.91 2.182a.5.5 0 0 1 0 .707L13.298 7.5a5.602 5.602 0 0 0-.707-.707l4.612-4.612a.5.5 0 0 1 .707 0Zm-5.657 5.656a4.5 4.5 0 0 0-6.364 0l-.421.422l6.364 6.364l.421-.422a4.5 4.5 0 0 0 0-6.364Zm-10.51 2.754L4.644 8.85l.002.002l6.5 6.5a.5.5 0 0 0 .103.08L9.5 18.348a.5.5 0 0 1-.781.096l-7.072-7.071a.5.5 0 0 1 .097-.782Z"
      />
    </svg>
  );
}
export default BroomFilled;
