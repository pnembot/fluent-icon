import type { SVGProps } from "react";

export function MailAlertFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.497 4a3 3 0 0 1 6 0v2l1.32 1.119a.5.5 0 0 1-.323.881h-7.993a.5.5 0 0 1-.323-.881L11.498 6V4Zm3 6a1.5 1.5 0 0 1-1.414-1h2.829a1.5 1.5 0 0 1-1.415 1ZM10.5 5.537l-.966.819C8.468 7.259 9.106 9 10.503 9h1.52l.119.333c.032.09.068.178.11.262L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4h6v1.537Zm-.245 6.394l2.613-1.538a2.5 2.5 0 0 0 3.99-1.06L16.974 9H18v5.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0Z"
      />
    </svg>
  );
}
export default MailAlertFilled;
