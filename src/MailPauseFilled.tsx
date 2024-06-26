import type { SVGProps } from "react";

export function MailPauseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 11c1.33 0 2.55-.472 3.5-1.257V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0l2.23-1.312A5.486 5.486 0 0 0 14.5 11Zm-10-7h4.707a5.496 5.496 0 0 0 2.235 6.072L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4Zm10 6a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm-1-6.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0Zm3 0v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 1 0Z"
      />
    </svg>
  );
}
export default MailPauseFilled;
