import type { SVGProps } from "react";

export function CalendarChat(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 16h3.707c.076.266.17.525.283.773L9.421 17H5.5A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.465 5.465 0 0 0-1-.393V7H4v7.5A1.5 1.5 0 0 0 5.5 16Zm0-12A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4h-9Zm5.063 12.682l-.544 1.789a.41.41 0 0 0 .51.51l1.79-.544a4.5 4.5 0 1 0-1.755-1.755ZM12.5 16a.5.5 0 0 1 0-1h2a.5.5 0 1 1 0 1h-2Zm0-3h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1 0-1Z"
      />
    </svg>
  );
}
export default CalendarChat;
