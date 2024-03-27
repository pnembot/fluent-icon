import type { SVGProps } from "react";

export function MailInboxArrowRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.5 1a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm2.353 4.854l.003-.003A.5.5 0 0 0 16 5.503v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L14.293 5H11.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2ZM8.023 5H6a2 2 0 0 0-2 2v4h3.5a.5.5 0 0 1 .5.5v.011l.004.06a2.572 2.572 0 0 0 .256.955c.126.254.308.492.572.667c.26.174.63.307 1.168.307c.537 0 .907-.133 1.168-.307c.264-.175.446-.413.572-.667a2.57 2.57 0 0 0 .26-1.015V11.5a.5.5 0 0 1 .5-.499H16v-.6a5.507 5.507 0 0 0 1-.657V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.207a5.48 5.48 0 0 0-.185 1Zm-.972 7H4v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3h-3.05a3.563 3.563 0 0 1-.315.974a2.694 2.694 0 0 1-.912 1.051c-.443.295-1.01.475-1.723.475c-.712 0-1.28-.18-1.723-.475a2.694 2.694 0 0 1-.912-1.051A3.562 3.562 0 0 1 7.051 12Z"
      />
    </svg>
  );
}
export default MailInboxArrowRight;
