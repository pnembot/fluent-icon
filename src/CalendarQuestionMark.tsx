import React, { SVGProps } from "react";

export function CalendarQuestionMark(props: SVGProps<SVGSVGElement>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1a5.465 5.465 0 0 0-1-.393V7H4v7.5A1.5 1.5 0 0 0 5.5 16h3.707c.099.349.23.683.393 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4Zm0 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-.625-1.995a.625.625 0 1 1 1.25 0a.625.625 0 0 1-1.25 0Zm-1.228-3.547c-.011-1.137.805-1.955 1.853-1.955c1.031 0 1.853.846 1.853 1.95c0 .586-.214.908-.727 1.319l-.277.214c-.246.194-.329.3-.346.448l-.011.156A.5.5 0 0 1 14 15.5c0-.57.21-.884.716-1.288l.278-.215c.288-.23.36-.342.36-.544c0-.558-.382-.95-.854-.95c-.494 0-.859.366-.854.945a.5.5 0 1 1-1 .01Z"
      />
    </svg>
  );
}
export default CalendarQuestionMark;