import type { SVGProps } from "react";

export function CalendarAssistantFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 7v2.6A5.5 5.5 0 0 0 9.6 17H5.5A2.5 2.5 0 0 1 3 14.5V7h14Zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3h9Zm0 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-1.092-7.166a.5.5 0 0 1 .472-.334h1.18a.5.5 0 0 1 .474.658l-.28.842H16a.5.5 0 0 1 .42.77l-2.25 3.5a.5.5 0 0 1-.902-.401L13.776 15H13a.5.5 0 0 1-.472-.666l.88-2.5Z"
      />
    </svg>
  );
}
export default CalendarAssistantFilled;
