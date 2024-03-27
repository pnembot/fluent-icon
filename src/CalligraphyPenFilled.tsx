import type { SVGProps } from "react";

export function CalligraphyPenFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2.5a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 6h.2L5.24 9.08a2.5 2.5 0 0 0 .103 2.335l3.463 5.907c.16.273.407.478.694.588v-7.044a1 1 0 1 1 1 0v7.036c.278-.112.518-.313.674-.58l3.463-5.907a2.5 2.5 0 0 0 .102-2.335L13.28 6h.22A1.5 1.5 0 0 0 15 4.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2Z"
      />
    </svg>
  );
}
export default CalligraphyPenFilled;
