import type { SVGProps } from "react";

export function CalendarWeekStartFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9Zm-8 3a.5.5 0 0 0-.492.41L6 6.5v7l.008.09a.5.5 0 0 0 .984 0L7 13.5v-7l-.008-.09A.5.5 0 0 0 6.5 6Z"
      />
    </svg>
  );
}
export default CalendarWeekStartFilled;
