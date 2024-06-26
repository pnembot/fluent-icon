import type { SVGProps } from "react";

export function PointScanFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 2.5a.5.5 0 0 0-1 0v4.025A5.002 5.002 0 0 0 3.525 11H8V6.525a5.065 5.065 0 0 1 1 0V2.5ZM2.5 11h1.025a5.059 5.059 0 0 0 0 1H2.5a.5.5 0 0 1 0-1ZM8 17.5v-1.025a5.068 5.068 0 0 0 1 0V17.5a.5.5 0 0 1-1 0Zm5.476-5.5H17.5a.5.5 0 0 0 0-1h-4.025a5.07 5.07 0 0 1 0 1H9v4.475A5.002 5.002 0 0 0 13.476 12ZM8 16.475A5.002 5.002 0 0 1 3.525 12H8v4.475ZM9 11h4.475A5.002 5.002 0 0 0 9 6.525V11Z"
      />
    </svg>
  );
}
export default PointScanFilled;
