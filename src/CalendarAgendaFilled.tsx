import type { SVGProps } from "react";

export function CalendarAgendaFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 14.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9Zm-3-8a.5.5 0 0 0-.41-.492L13.5 6h-7l-.09.008a.5.5 0 0 0 0 .984L6.5 7h7l.09-.008A.5.5 0 0 0 14 6.5Zm0 3.5a.5.5 0 0 0-.41-.492L13.5 9.5h-7l-.09.008a.5.5 0 0 0 0 .984l.09.008h7l.09-.008A.5.5 0 0 0 14 10Zm0 3.5a.5.5 0 0 0-.41-.492L13.5 13h-7l-.09.008a.5.5 0 0 0 0 .984L6.5 14h7l.09-.008A.5.5 0 0 0 14 13.5Z"
      />
    </svg>
  );
}
export default CalendarAgendaFilled;
