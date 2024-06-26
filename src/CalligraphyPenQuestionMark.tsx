import type { SVGProps } from "react";

export function CalligraphyPenQuestionMark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="currentColor">
        <path d="M19 5.5a4.5 4.5 0 1 0-9 0a4.5 4.5 0 0 0 9 0Zm-4.5 1.88a.625.625 0 1 1 0 1.25a.625.625 0 0 1 0-1.25Zm0-4.877c1.031 0 1.853.846 1.853 1.95c0 .586-.214.908-.727 1.318l-.277.215c-.246.194-.329.3-.346.448l-.011.156A.5.5 0 0 1 14 6.5c0-.57.21-.884.716-1.288l.278-.215c.288-.23.36-.342.36-.544c0-.558-.382-.95-.854-.95c-.494 0-.859.366-.854.945a.5.5 0 1 1-1 .01c-.01-1.137.806-1.955 1.854-1.955Z" />
        <path d="M14.845 10.99a5.636 5.636 0 0 1-1.085-.04l-3.26 5.561v-5.645a1 1 0 1 0-1 0v5.645L6.216 10.91a1.5 1.5 0 0 1-.062-1.4L7.816 6h1.206a5.57 5.57 0 0 1 0-1H6.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 6h.21L5.25 9.08a2.5 2.5 0 0 0 .103 2.335l3.463 5.907a1.373 1.373 0 0 0 2.368 0l3.463-5.907c.08-.137.146-.28.198-.426Z" />
      </g>
    </svg>
  );
}
export default CalligraphyPenQuestionMark;
