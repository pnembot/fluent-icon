import type { SVGProps } from "react";

export function VehicleCarProfileLtrClock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM5.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 0-1H6V3.5a.5.5 0 0 0-.5-.5ZM3 12.562c0-.713.302-1.37.798-1.83A5.493 5.493 0 0 0 5.5 11c1.86 0 3.505-.924 4.5-2.337v1.338h3.873l-1.239-2.229a1.5 1.5 0 0 0-1.31-.771h-.531a5.48 5.48 0 0 0 .184-1h.346a2.5 2.5 0 0 1 2.186 1.286l1.542 2.777l2.093.558A2.5 2.5 0 0 1 19 13.037v1.214a1.75 1.75 0 0 1-1.023 1.592a2.5 2.5 0 0 1-4.927.158h-4.1a2.5 2.5 0 0 1-4.927-.158A1.75 1.75 0 0 1 3 14.251v-1.689Zm2.527-1.561l-.003.01l-.388.096A1.5 1.5 0 0 0 4 12.562v1.689c0 .16.05.31.137.432A2.501 2.501 0 0 1 8.95 15h4.1a2.5 2.5 0 0 1 4.813-.318a.746.746 0 0 0 .137-.432v-1.214a1.5 1.5 0 0 0-1.113-1.449L14.684 11H5.527Zm.973 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Zm9 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  );
}
export default VehicleCarProfileLtrClock;
