import type { SVGProps } from "react";

export function VehicleTruckCube(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M1.5 7.882V4.118a1 1 0 0 1 .553-.894l3-1.5a1 1 0 0 1 .894 0l3 1.5a1 1 0 0 1 .553.894v3.764a1 1 0 0 1-.553.895l-3 1.5a1 1 0 0 1-.894 0l-3-1.5a1 1 0 0 1-.553-.895Zm1.04-3.576a.5.5 0 0 0 .266.655L5 5.887V8.5a.5.5 0 1 0 1 0V5.887l2.194-.926a.5.5 0 0 0-.389-.921L5.5 5.013L3.194 4.04a.5.5 0 0 0-.655.266Zm-.498 9.944V9.89l1 .5v3.86c0 .415.336.75.75.75h.259a2.5 2.5 0 0 1 4.9 0h1.1A2.5 2.5 0 0 1 13 13.05v-8.3a.75.75 0 0 0-.75-.75h-1.754a2 2 0 0 0-.338-1h2.091c.967 0 1.75.784 1.75 1.75V6h.882a1.5 1.5 0 0 1 1.342.83l1.618 3.235c.104.209.159.438.159.671V14.5a1.5 1.5 0 0 1-1.5 1.5h-1.55a2.5 2.5 0 0 1-4.9 0h-1.1a2.5 2.5 0 0 1-4.9 0h-.259a1.75 1.75 0 0 1-1.75-1.75ZM14.95 15h1.55a.5.5 0 0 0 .5-.5V11h-3v2.5c.48.36.827.89.95 1.5Zm1.742-5L15.33 7.277A.5.5 0 0 0 14.883 7H14v3h2.69ZM5 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0Zm7.5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  );
}
export default VehicleTruckCube;
