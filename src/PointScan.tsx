import type { SVGProps } from "react";

export function PointScan(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.5 2a.5.5 0 0 1 .5.5v4.025A5.002 5.002 0 0 1 13.475 11H17.5a.5.5 0 0 1 0 1h-4.025A5.002 5.002 0 0 1 9 16.475V17.5a.5.5 0 0 1-1 0v-1.025A5.002 5.002 0 0 1 3.525 12H2.5a.5.5 0 0 1 0-1h1.025A5.002 5.002 0 0 1 8 6.525V2.5a.5.5 0 0 1 .5-.5ZM4.531 12A4.002 4.002 0 0 0 8 15.47V12H4.531ZM8 11V7.531A4.002 4.002 0 0 0 4.531 11H8Zm1 1v3.47A4.002 4.002 0 0 0 12.47 12H9Zm3.47-1A4.002 4.002 0 0 0 9 7.531V11h3.47Z"
      />
    </svg>
  );
}
export default PointScan;
