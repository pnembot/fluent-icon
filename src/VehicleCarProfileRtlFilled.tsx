import type { SVGProps } from "react";

export function VehicleCarProfileRtlFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.023 13.842A1.75 1.75 0 0 1 2 12.25v-1.213A2.5 2.5 0 0 1 3.856 8.62l2.093-.558L7.49 5.286A2.5 2.5 0 0 1 9.677 4h3.382a2.5 2.5 0 0 1 2.371 1.71l.823 2.468A2.5 2.5 0 0 1 18 10.562v1.688a1.75 1.75 0 0 1-1.023 1.592A2.5 2.5 0 0 1 12.05 14h-4.1a2.5 2.5 0 0 1-4.927-.158ZM13.058 5H12v3h3.14l-.659-1.974A1.5 1.5 0 0 0 13.06 5Zm-4.692.772L7.128 8H11V5H9.677a1.5 1.5 0 0 0-1.311.772ZM16 13.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Zm-9 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0Z"
      />
    </svg>
  );
}
export default VehicleCarProfileRtlFilled;
