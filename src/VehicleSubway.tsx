import type { SVGProps } from "react";

export function VehicleSubway(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM8.5 5a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1h-3ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-2.681 2.983l2.384 1.06a.5.5 0 1 1-.406.914L11.894 17H8.106l-4.403 1.957a.5.5 0 1 1-.406-.914l2.385-1.06A3 3 0 0 1 3 14V6Zm9.012 10H14a2 2 0 0 0 2-2v-2H4v2a2 2 0 0 0 2 2h6.012ZM4 6v5h12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2Z"
      />
    </svg>
  );
}
export default VehicleSubway;
