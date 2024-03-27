import type { SVGProps } from "react";

export function AlertSnooze(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 11.5V8.055A.505.505 0 0 0 5.003 8a5 5 0 0 1 6.36-4.813a.5.5 0 1 0 .272-.962A6 6 0 0 0 4.004 7.94A.504.504 0 0 0 4 7.998V11.4l-.923 2.216A1 1 0 0 0 4 15h3.5a2.5 2.5 0 0 0 5 0H16a1 1 0 0 0 .923-1.384L16 11.4V9.998a.5.5 0 0 0-1 0V11.5a.5.5 0 0 0 .039.192L16 14H4l.962-2.308A.5.5 0 0 0 5 11.5ZM8.5 15h3a1.5 1.5 0 0 1-3 0ZM14 2h3.5a.5.5 0 0 1 .452.714l-.043.073L14.96 7h2.54a.5.5 0 0 1 .09.992L17.5 8H14a.5.5 0 0 1-.452-.714l.042-.073L16.54 3H14a.5.5 0 0 1-.09-.992L14 2ZM9.5 6H12a.5.5 0 0 1 .432.753l-.048.067L10.57 9H12a.5.5 0 0 1 .09.992L12 10H9.5a.5.5 0 0 1-.432-.753l.048-.067L10.933 7H9.501a.5.5 0 0 1-.09-.992L9.501 6Z"
      />
    </svg>
  );
}
export default AlertSnooze;
