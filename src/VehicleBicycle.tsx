import type { SVGProps } from "react";

export function VehicleBicycle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 2a.5.5 0 0 0 0 1h1.59l.6 3H7V4.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1H6v1.459L5.576 9H5.5a3.5 3.5 0 1 0 3.496 3.672l3.97-5.293l.364 1.821A3.501 3.501 0 0 0 14.5 16a3.5 3.5 0 1 0-.19-6.995l-1.32-6.603A.5.5 0 0 0 12.5 2h-2ZM3 12.5a2.5 2.5 0 0 1 2.41-2.498l-.403 2.416A.5.5 0 0 0 5.5 13h2.45A2.5 2.5 0 0 1 3 12.5Zm3.09-.5l.306-1.835A2.504 2.504 0 0 1 7.95 12H6.09Zm.473-2.836L6.923 7H12l-3.216 4.288a3.51 3.51 0 0 0-2.221-2.124Zm6.966 1.031l.48 2.403a.5.5 0 0 0 .981-.196L14.51 10a2.5 2.5 0 1 1-.98.195Z"
      />
    </svg>
  );
}
export default VehicleBicycle;
