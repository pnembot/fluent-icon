import type { SVGProps } from "react";

export function MailClockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1V3.5a.5.5 0 0 0-.5-.5Zm0 8c1.33 0 2.55-.472 3.5-1.257V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0l2.23-1.312A5.486 5.486 0 0 0 14.5 11Zm-10-7h4.707a5.496 5.496 0 0 0 2.235 6.072L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4Z"
      />
    </svg>
  );
}
export default MailClockFilled;
