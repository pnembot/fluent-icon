import type { SVGProps } from "react";

export function MailInboxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm1 4h3.5a.5.5 0 0 1 .5.5v.011l.004.06a2.572 2.572 0 0 0 .256.955c.126.254.308.492.572.667c.26.174.63.307 1.168.307c.537 0 .907-.133 1.168-.307c.264-.175.446-.413.572-.667a2.57 2.57 0 0 0 .26-1.015v-.013a.5.5 0 0 1 .5-.498H16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4Zm4 .5v-.002Z"
      />
    </svg>
  );
}
export default MailInboxFilled;
