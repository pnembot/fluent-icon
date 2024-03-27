import type { SVGProps } from "react";

export function MailInboxDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.646-1.146a.5.5 0 0 0-.708-.708L13.5 4.793l-1.146-1.147a.5.5 0 0 0-.708.708L12.793 5.5l-1.147 1.146a.5.5 0 0 0 .708.708L13.5 6.207l1.146 1.147a.5.5 0 0 0 .708-.708L14.207 5.5l1.147-1.146ZM16 11v-.6a5.507 5.507 0 0 0 1-.657V15a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h2.207a5.48 5.48 0 0 0-.185 1H6a2 2 0 0 0-2 2v4h3.5a.5.5 0 0 1 .5.5v.011l.004.06a2.572 2.572 0 0 0 .256.955c.126.254.308.492.572.667c.26.174.63.307 1.168.307c.537 0 .907-.133 1.168-.307c.264-.175.446-.413.572-.667a2.57 2.57 0 0 0 .26-1.015v-.013a.5.5 0 0 1 .5-.498H16Z"
      />
    </svg>
  );
}
export default MailInboxDismissFilled;
