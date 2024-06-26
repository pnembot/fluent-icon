import type { SVGProps } from "react";

export function VehicleTruckBag(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 1c.364 0 .706.097 1 .268A2 2 0 0 1 8 3v1h.5a.5.5 0 0 1 .5.5V9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4.5a.5.5 0 0 1 .5-.5H2V3a2 2 0 0 1 2-2ZM3 4h2V3a1 1 0 0 0-2 0v1Zm3-1v1h1V3a1 1 0 0 0-1.25-.969c.16.287.25.618.25.969Zm3 .085V3h3.25c.967 0 1.75.784 1.75 1.75V6h.882a1.5 1.5 0 0 1 1.342.83l1.618 3.235a1.5 1.5 0 0 1 .159.67V14.5a1.5 1.5 0 0 1-1.5 1.5h-1.55a2.5 2.5 0 0 1-4.9 0h-1.1a2.5 2.5 0 0 1-4.9 0h-.259a1.75 1.75 0 0 1-1.75-1.75v-2.406c.301.101.623.156.958.156h.042v2.25c0 .414.336.75.75.75h.259a2.5 2.5 0 0 1 4.9 0h1.1A2.5 2.5 0 0 1 13 13.05v-8.3a.75.75 0 0 0-.75-.75H9.915A1.504 1.504 0 0 0 9 3.085ZM14 13.5c.48.36.827.89.95 1.5h1.55a.5.5 0 0 0 .5-.5V11h-3v2.5Zm0-3.5h2.692L15.33 7.276A.5.5 0 0 0 14.883 7H14v3Zm-7.5 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Z"
      />
    </svg>
  );
}
export default VehicleTruckBag;
