import type { SVGProps } from "react";

export function PeopleQueueFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.75 5.25a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0ZM4 8a1 1 0 0 0-1 1v4.5a3.5 3.5 0 1 0 7 0V9a1 1 0 0 0-1-1H4Zm5.75-2.75c0 .65-.19 1.255-.52 1.763c.413.048.787.22 1.084.48a2.25 2.25 0 1 0-1.127-4.07c.355.52.563 1.15.563 1.827ZM9.5 16.855A4.489 4.489 0 0 0 11 13.5V9c0-.364-.098-.706-.268-1H13a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.355ZM13.75 5.25c0 .65-.19 1.255-.52 1.763c.413.048.787.22 1.084.48a2.25 2.25 0 1 0-1.127-4.07c.355.52.563 1.15.563 1.827Zm-.25 11.605A4.489 4.489 0 0 0 15 13.5V9c0-.364-.098-.706-.268-1H17a1 1 0 0 1 1 1v4.5a3.5 3.5 0 0 1-4.5 3.355Z"
      />
    </svg>
  );
}
export default PeopleQueueFilled;
