import type { SVGProps } from "react";

export function CalendarClock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.465 5.465 0 0 1-.393-1H5.5A1.5 1.5 0 0 1 4 14.5V7h12v2.207c.349.099.683.23 1 .393V5.5ZM5.5 4h9A1.5 1.5 0 0 1 16 5.5V6H4v-.5A1.5 1.5 0 0 1 5.5 4Zm9 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-.5-6.5a.5.5 0 0 1 1 0V14h1a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5v-2Z"
      />
    </svg>
  );
}
export default CalendarClock;
