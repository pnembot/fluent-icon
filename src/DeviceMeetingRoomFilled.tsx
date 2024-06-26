import type { SVGProps } from "react";

export function DeviceMeetingRoomFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.658 4.946A2.5 2.5 0 0 1 6.096 3h7.807a2.5 2.5 0 0 1 2.438 1.946l1.59 7A2.5 2.5 0 0 1 15.495 15H4.505a2.5 2.5 0 0 1-2.438-3.054l1.591-7ZM5.5 16a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1h-9Z"
      />
    </svg>
  );
}
export default DeviceMeetingRoomFilled;
