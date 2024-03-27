import type { SVGProps } from "react";

export function VehicleBusFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 4a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H9ZM3 5.5A3.5 3.5 0 0 1 6.5 2h7A3.5 3.5 0 0 1 17 5.5V8h1a.5.5 0 0 1 0 1h-1v7.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V16H7v.5A1.5 1.5 0 0 1 5.5 18h-1A1.5 1.5 0 0 1 3 16.5V9H2a.5.5 0 0 1 0-1h1V5.5Zm13 0A2.5 2.5 0 0 0 13.5 3h-7A2.5 2.5 0 0 0 4 5.5V10h12V5.5ZM14 16v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V16h-2ZM4 16v.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V16H4Zm4-3a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"
      />
    </svg>
  );
}
export default VehicleBusFilled;
