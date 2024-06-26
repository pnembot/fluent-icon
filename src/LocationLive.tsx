import type { SVGProps } from "react";

export function LocationLive(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.53 3.012a7 7 0 0 1 7.455 7.458a.5.5 0 1 0 .997.066a8 8 0 0 0-8.518-8.522a.5.5 0 1 0 .066.998ZM8 4.984a.5.5 0 0 1 .522-.479a6.25 6.25 0 0 1 5.972 5.973a.5.5 0 1 1-.999.043A5.25 5.25 0 0 0 8.48 5.505A.5.5 0 0 1 8 4.984Zm-.5 7.637a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25Zm-3.182 2.057l2.828 2.828a.5.5 0 0 0 .708 0l2.828-2.828a4.5 4.5 0 1 0-6.364 0Zm.707-.707a3.5 3.5 0 1 1 4.95 0L7.5 16.446L5.025 13.97Z"
      />
    </svg>
  );
}
export default LocationLive;
