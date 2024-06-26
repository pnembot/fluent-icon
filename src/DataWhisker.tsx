import type { SVGProps } from "react";

export function DataWhisker(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a.5.5 0 0 0 0 1h1v1h-.5A1.5 1.5 0 0 0 4 5.5v7A1.5 1.5 0 0 0 5.5 14H6v1H5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H7v-1h.5A1.5 1.5 0 0 0 9 12.5v-7A1.5 1.5 0 0 0 7.5 4H7V3h1a.5.5 0 0 0 0-1H5Zm0 10.5V11h3v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5Zm0-7a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V10H5V5.5ZM12 4a.5.5 0 0 0 0 1h1v1h-.5A1.5 1.5 0 0 0 11 7.5v7a1.5 1.5 0 0 0 1.5 1.5h.5v1h-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-1v-1h.5a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 14.5 6H14V5h1a.5.5 0 0 0 0-1h-3Zm3 5h-3V7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V9Zm-3 1h3v4.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V10Z"
      />
    </svg>
  );
}
export default DataWhisker;
