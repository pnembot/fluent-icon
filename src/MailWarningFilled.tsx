import type { SVGProps } from "react";

export function MailWarningFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m13.603 1.554l-3.496 6.998A1 1 0 0 0 11.002 10h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0Zm1.395 1.941v3.002a.5.5 0 1 1-1 0V3.495a.5.5 0 1 1 1 0ZM14.498 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1ZM18 11h-6.164l-1.582.931a.5.5 0 0 1-.507 0L2 7.373V14.5A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5V11ZM9.217 8.104L11.267 4H4.5a2.5 2.5 0 0 0-2.485 2.223L10 10.92l.17-.1a2.004 2.004 0 0 1-.953-2.716Z"
      />
    </svg>
  );
}
export default MailWarningFilled;
