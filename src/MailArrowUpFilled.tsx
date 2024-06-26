import type { SVGProps } from "react";

export function MailArrowUpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M19 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4.146-2.353l-.003-.003A.498.498 0 0 0 14.503 3h-.006a.499.499 0 0 0-.35.147l-2 2a.5.5 0 0 0 .707.707L14 4.707V7.5a.5.5 0 1 0 1 0V4.707l1.146 1.147a.5.5 0 1 0 .707-.708l-2-2ZM14.5 11c1.33 0 2.55-.472 3.5-1.257V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0l2.23-1.312A5.485 5.485 0 0 0 14.5 11Zm-10-7h4.707a5.496 5.496 0 0 0 2.235 6.072L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4Z"
      />
    </svg>
  );
}
export default MailArrowUpFilled;
