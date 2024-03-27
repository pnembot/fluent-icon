import type { SVGProps } from "react";

export function CalendarMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M16 4.5A2.5 2.5 0 0 0 13.5 2h-9A2.5 2.5 0 0 0 2 4.5v9A2.5 2.5 0 0 0 4.5 16h9a2.5 2.5 0 0 0 2.5-2.5v-9ZM3 6h12v7.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 13.5V6Zm1.5-3h9A1.5 1.5 0 0 1 15 4.5V5H3v-.5A1.5 1.5 0 0 1 4.5 3ZM5 17c.456.607 1.182 1 2 1h6.5a4.5 4.5 0 0 0 4.5-4.5v-7c0-.818-.393-1.544-1-2v9a3.5 3.5 0 0 1-3.5 3.5H5Z"
      />
    </svg>
  );
}
export default CalendarMultiple;
