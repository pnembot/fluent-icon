import type { SVGProps } from "react";

export function HourglassOneQuarterFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.68 14A3.41 3.41 0 0 0 6 16h8a3.49 3.49 0 0 0-.31-1.4a3.378 3.378 0 0 0-.367-.6H6.68Z"
      />
    </svg>
  );
}
export default HourglassOneQuarterFilled;
