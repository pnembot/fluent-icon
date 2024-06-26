import type { SVGProps } from "react";

export function ChartMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15 11c0-.365.097-.707.268-1H10.5A1.5 1.5 0 0 1 9 8.5V2.015a7.5 7.5 0 0 0 0 14.967v-1.984a2 2 0 0 1 3-1.732v-.268a2 2 0 0 1 3-1.732v-.268Zm-5-8.984v6.483a.5.5 0 0 0 .5.5h6.484A7.501 7.501 0 0 0 10 2.016Zm6 8.983a1 1 0 1 1 2 0v7a1 1 0 1 1-2 0v-7Zm-6 4a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0v-3Zm3-2a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0v-5Z"
      />
    </svg>
  );
}
export default ChartMultipleFilled;
