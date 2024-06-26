import type { SVGProps } from "react";

export function PresenceAwayFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0S0 4.477 0 10s4.477 10 10 10Zm0-13.992v3.578l2.707 2.707a1 1 0 0 1-1.414 1.415l-3-3A1 1 0 0 1 8 10V6.008a1 1 0 1 1 2 0Z"
      />
    </svg>
  );
}
export default PresenceAwayFilled;
