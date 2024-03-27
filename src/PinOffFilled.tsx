import type { SVGProps } from "react";

export function PinOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l4.75 4.75l-2.878 1.15a1 1 0 0 0-.335 1.636L6.293 13L3 16.293V17h.707L7 13.707l2.61 2.61a1 1 0 0 0 1.636-.335l1.15-2.878l4.75 4.75a.5.5 0 0 0 .708-.708l-15-15Zm14.008 7.732l-3.242 1.62L8.501 6.38l1.621-3.242a2 2 0 0 1 3.203-.52l4.057 4.057a2 2 0 0 1-.52 3.203Z"
      />
    </svg>
  );
}
export default PinOffFilled;
