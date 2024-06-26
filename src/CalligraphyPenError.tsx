import type { SVGProps } from "react";

export function CalligraphyPenError(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M14.5 10a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9ZM14 3.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Zm1.125 4a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0Zm-.28 3.49a5.636 5.636 0 0 1-1.085-.04l-3.26 5.561v-5.645a1 1 0 1 0-1 0v5.645L6.216 10.91a1.5 1.5 0 0 1-.062-1.4L7.816 6h1.206a5.57 5.57 0 0 1 0-1H6.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 6h.21L5.25 9.08a2.5 2.5 0 0 0 .103 2.335l3.463 5.907a1.373 1.373 0 0 0 2.368 0l3.463-5.907c.08-.137.146-.28.198-.426Z"
      />
    </svg>
  );
}
export default CalligraphyPenError;
