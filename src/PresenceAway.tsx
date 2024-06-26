import type { SVGProps } from "react";

export function PresenceAway(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 9.586V6.008a1 1 0 1 0-2 0V10a1 1 0 0 0 .293.707l3 3a1 1 0 1 0 1.414-1.414L10 9.586Zm-10 .41C0 4.475 4.475 0 9.995 0s9.996 4.475 9.996 9.995s-4.475 9.996-9.996 9.996C4.475 19.99 0 15.516 0 9.995ZM9.995 2a7.995 7.995 0 1 0 0 15.99a7.995 7.995 0 0 0 0-15.99Z"
      />
    </svg>
  );
}
export default PresenceAway;
