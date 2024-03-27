import type { SVGProps } from "react";

export function CalendarTodayFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm7 4.5V7H3v7.5A2.5 2.5 0 0 0 5.5 17h3v-1.75a1.5 1.5 0 0 1-.976-2.639l.01-.009l1.496-1.247a1.497 1.497 0 0 1 1.94 0l1.506 1.256a1.5 1.5 0 0 1-.976 2.639V17h3a2.5 2.5 0 0 0 2.5-2.5ZM12 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm5-3.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5V6h14v-.5Zm-5.82 8.634a.5.5 0 0 0 .64-.768l-1.5-1.25a.5.5 0 0 0-.64 0l-1.5 1.25a.5.5 0 1 0 .64.768l.68-.566V17.5a.5.5 0 1 0 1 0v-3.932l.68.566Z"
      />
    </svg>
  );
}
export default CalendarTodayFilled;
