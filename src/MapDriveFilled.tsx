import type { SVGProps } from "react";

export function MapDriveFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3.5a.5.5 0 0 1-.5.5h-7v2h1a.5.5 0 0 1 .5.5V13h1.498a.5.5 0 0 1 .5.5v1H17.5a.5.5 0 0 1 0 1h-3.502v1a.5.5 0 0 1-.5.5H6.502a.5.5 0 0 1-.5-.5v-1H2.5a.5.5 0 0 1 0-1h3.502v-1a.5.5 0 0 1 .5-.5H8v-1.5a.5.5 0 0 1 .5-.5h1V9h-7a.5.5 0 0 1-.5-.5V5Zm12.75 1.744a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  );
}
export default MapDriveFilled;
