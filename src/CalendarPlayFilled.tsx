import type { SVGProps } from "react";

export function CalendarPlayFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm0 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-.74-6.545a.45.45 0 0 1 .26.079l2.296 1.506a.499.499 0 0 1 .229.426a.535.535 0 0 1-.091.3a.46.46 0 0 1-.13.128l-2.296 1.567a.545.545 0 0 1-.13.063a.453.453 0 0 1-.323-.018a.57.57 0 0 1-.158-.111a.504.504 0 0 1-.145-.357v-3.075a.51.51 0 0 1 .3-.466a.436.436 0 0 1 .189-.042Z"
      />
    </svg>
  );
}
export default CalendarPlayFilled;
