import type { SVGProps } from "react";

export function TicketHorizontal(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16.5 5A1.5 1.5 0 0 1 18 6.5V8a.5.5 0 0 1-.5.5a1.5 1.5 0 0 0 0 3a.5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 2 13.5V12a.5.5 0 0 1 .5-.5a1.5 1.5 0 0 0 0-3A.5.5 0 0 1 2 8V6.5A1.5 1.5 0 0 1 3.5 5h13Zm.5 1.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1-.161-4.862L17 7.55V6.5Z"
      />
    </svg>
  );
}
export default TicketHorizontal;
