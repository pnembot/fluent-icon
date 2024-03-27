import type { SVGProps } from "react";

export function VehicleCableCarFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.434 3.004a.5.5 0 1 1 .132.992L12 4.738V6a2.99 2.99 0 0 1-.764 2H13a3 3 0 0 1 3 3v2H4v-2a3 3 0 0 1 3-3h2a2 2 0 0 0 2-2V4.871L2.566 5.996a.5.5 0 1 1-.132-.992L11 3.862V3.5a.5.5 0 1 1 1 0v.229l5.434-.725ZM16 14v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1h12Z"
      />
    </svg>
  );
}
export default VehicleCableCarFilled;
