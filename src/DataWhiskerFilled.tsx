import type { SVGProps } from "react";

export function DataWhiskerFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 2a.5.5 0 0 0 0 1h1v1h-.5A1.5 1.5 0 0 0 4 5.5V10h5V5.5A1.5 1.5 0 0 0 7.5 4H7V3h1a.5.5 0 0 0 0-1H5Zm7 2a.5.5 0 0 0 0 1h1v1h-.5A1.5 1.5 0 0 0 11 7.5V9h5V7.5A1.5 1.5 0 0 0 14.5 6H14V5h1a.5.5 0 0 0 0-1h-3ZM4.5 15.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1H7v-1h.5A1.5 1.5 0 0 0 9 12.5V11H4v1.5A1.5 1.5 0 0 0 5.5 14H6v1H5a.5.5 0 0 0-.5.5ZM12 18a.5.5 0 0 1 0-1h1v-1h-.5a1.5 1.5 0 0 1-1.5-1.5V10h5v4.5a1.5 1.5 0 0 1-1.5 1.5H14v1h1a.5.5 0 0 1 0 1h-3Z"
      />
    </svg>
  );
}
export default DataWhiskerFilled;
