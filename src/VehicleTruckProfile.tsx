import type { SVGProps } from "react";

export function VehicleTruckProfile(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.042 4.75c0-.966.784-1.75 1.75-1.75h8.459c.966 0 1.75.784 1.75 1.75V6h.881a1.5 1.5 0 0 1 1.342.83l1.618 3.235a1.5 1.5 0 0 1 .159.67V14.5a1.5 1.5 0 0 1-1.5 1.5h-1.55a2.5 2.5 0 0 1-4.9 0h-1.1a2.5 2.5 0 0 1-4.9 0h-.259a1.75 1.75 0 0 1-1.75-1.75v-9.5ZM10.05 15A2.5 2.5 0 0 1 13 13.05v-8.3a.75.75 0 0 0-.75-.75H3.793a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h.259a2.5 2.5 0 0 1 4.9 0h1.1ZM14 13.5c.48.36.827.89.95 1.5h1.55a.5.5 0 0 0 .5-.5V11h-3v2.5Zm0-3.5h2.692L15.33 7.276A.5.5 0 0 0 14.883 7H14v3Zm-7.5 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm4.5 1.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Z"
      />
    </svg>
  );
}
export default VehicleTruckProfile;
