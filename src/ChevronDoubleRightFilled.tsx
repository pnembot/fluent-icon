import type { SVGProps } from "react";

export function ChevronDoubleRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.733 4.207a.75.75 0 0 1 1.06.026l5.001 5.25a.75.75 0 0 1 0 1.035l-5 5.25a.75.75 0 1 1-1.087-1.034L13.215 10L8.707 5.267a.75.75 0 0 1 .026-1.06Zm-4 0a.75.75 0 0 1 1.06.026l5.001 5.25a.75.75 0 0 1 0 1.035l-5 5.25a.75.75 0 1 1-1.087-1.034L9.216 10l-4.51-4.734a.75.75 0 0 1 .027-1.06Z"
      />
    </svg>
  );
}
export default ChevronDoubleRightFilled;
