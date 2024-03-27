import type { SVGProps } from "react";

export function CalendarInfo(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v4.1a5.465 5.465 0 0 0-1-.393V7H4v7.5A1.5 1.5 0 0 0 5.5 16h3.707c.099.349.23.683.393 1H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm0 1h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4Zm-.625 8.5a.625.625 0 1 1 1.25 0a.625.625 0 0 1-1.25 0Zm1.125 4a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 1 0v2Zm-5-2a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Zm1 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 0 0-7 0Z"
      />
    </svg>
  );
}
export default CalendarInfo;
