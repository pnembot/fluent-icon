import type { SVGProps } from "react";

export function CalendarSync(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1a5.465 5.465 0 0 0-1-.393V7H4v7.5A1.5 1.5 0 0 0 5.5 16h3.707c.099.349.23.683.393 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4ZM10 14.5a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0Zm6.5-3a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H15a.5.5 0 0 1 0-1h.468a1.999 1.999 0 0 0-2.383.336a.5.5 0 0 1-.706-.707A3.001 3.001 0 0 1 16 12.152V12a.5.5 0 0 1 .5-.5Zm-.876 5.532A2.999 2.999 0 0 1 13 16.848V17a.5.5 0 0 1-1 0v-1.5a.5.5 0 0 1 .5-.5H14a.5.5 0 0 1 0 1h-.468a1.999 1.999 0 0 0 2.383-.336a.5.5 0 0 1 .706.707c-.284.285-.624.51-.997.66Z"
      />
    </svg>
  );
}
export default CalendarSync;
