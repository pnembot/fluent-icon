import type { SVGProps } from "react";

export function CalendarPlay(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1a5.465 5.465 0 0 0-1-.393V7H4v7.5A1.5 1.5 0 0 0 5.5 16h3.707c.099.349.23.683.393 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4Zm0 15a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-.74-6.545a.45.45 0 0 1 .26.079l2.296 1.506a.499.499 0 0 1 .229.426a.535.535 0 0 1-.091.3a.46.46 0 0 1-.13.128l-2.296 1.567a.545.545 0 0 1-.13.063a.453.453 0 0 1-.323-.018a.57.57 0 0 1-.158-.111a.504.504 0 0 1-.145-.357v-3.075a.51.51 0 0 1 .3-.466a.436.436 0 0 1 .189-.042Z"
      />
    </svg>
  );
}
export default CalendarPlay;
