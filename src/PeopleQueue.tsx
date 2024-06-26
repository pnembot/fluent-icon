import type { SVGProps } from "react";

export function PeopleQueue(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 7.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5Zm0-1a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5ZM3 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4.5a3.5 3.5 0 1 1-7 0V9Zm1 0v4.5a2.5 2.5 0 0 0 5 0V9H4Zm5.626-2.857a3.234 3.234 0 0 1-.396.87c.413.048.787.22 1.084.48a2.25 2.25 0 1 0-1.127-4.07c.193.282.342.597.439.934a1.25 1.25 0 1 1 0 1.787Zm-.127 10.712A3.5 3.5 0 0 0 14 13.5V9a1 1 0 0 0-1-1h-2.267c.17.294.268.636.268 1h2v4.5a2.5 2.5 0 0 1-2.75 2.488c-.213.32-.465.611-.75.867Zm4.127-10.712a3.236 3.236 0 0 1-.396.87c.413.048.787.22 1.084.48a2.25 2.25 0 1 0-1.127-4.07c.193.282.342.597.439.934a1.25 1.25 0 1 1 0 1.787Zm-.127 10.712A3.5 3.5 0 0 0 18 13.5V9a1 1 0 0 0-1-1h-2.267c.17.294.268.636.268 1h2v4.5a2.5 2.5 0 0 1-2.75 2.488c-.213.32-.465.611-.75.867Z"
      />
    </svg>
  );
}
export default PeopleQueue;
