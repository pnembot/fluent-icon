import type { SVGProps } from "react";

export function PresenceBlocked(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10s10-4.477 10-10Zm-2 0a8 8 0 0 1-12.906 6.32L16.32 5.094A7.965 7.965 0 0 1 18 10Zm-3.094-6.32L3.68 14.906A8 8 0 0 1 14.906 3.68Z"
      />
    </svg>
  );
}
export default PresenceBlocked;
