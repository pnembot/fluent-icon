import type { SVGProps } from "react";

export function MailAlert(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.497 4a3 3 0 0 1 6 0v2l1.32 1.119a.5.5 0 0 1-.323.881h-7.993a.5.5 0 0 1-.323-.881L11.498 6V4Zm3 6a1.5 1.5 0 0 1-1.414-1h2.829a1.5 1.5 0 0 1-1.415 1ZM4.5 5h6V4h-6A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5V9h-1v5.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5V7.963l6.746 3.968l.082.038a.5.5 0 0 0 .426-.038l2.613-1.538a2.51 2.51 0 0 1-.615-.798L10 10.92L3 6.802V6.5A1.5 1.5 0 0 1 4.5 5Z"
      />
    </svg>
  );
}
export default MailAlert;
