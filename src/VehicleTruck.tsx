import type { SVGProps } from "react";

export function VehicleTruck(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-5 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM4 2a2 2 0 0 0-2 2v10.5A1.5 1.5 0 0 0 3.5 16H4v.5A1.5 1.5 0 0 0 5.5 18h1A1.5 1.5 0 0 0 8 16.5V16h4v.5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5V16h.5a1.5 1.5 0 0 0 1.5-1.5V4a2 2 0 0 0-2-2H4Zm9 14.5V16h2v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5ZM7 16v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V16h2ZM3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10.5a.5.5 0 0 1-.5.5H16V9.746c0-.204-.025-.408-.075-.606l-.75-3.004A1.5 1.5 0 0 0 13.718 5H6.281a1.5 1.5 0 0 0-1.455 1.136L4.075 9.14A2.5 2.5 0 0 0 4 9.746V15h-.5a.5.5 0 0 1-.5-.5V4Zm2 11v-5h10v5H5Zm.14-6l.656-2.621A.5.5 0 0 1 6.28 6h7.438a.5.5 0 0 1 .485.379L14.86 9H5.14Z"
      />
    </svg>
  );
}
export default VehicleTruck;
