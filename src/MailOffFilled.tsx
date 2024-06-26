import type { SVGProps } from "react";

export function MailOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.355 1.354a2.502 2.502 0 0 0-1.486 2.015L10 10.92l.134-.079l.73.73l-.61.36a.5.5 0 0 1-.507 0L2 7.373V14.5A2.5 2.5 0 0 0 4.5 17h11c.241 0 .474-.034.695-.098l.951.952a.5.5 0 0 0 .708-.708l-15-15Zm9.791 8.378l5.093 5.092c.168-.336.262-.715.262-1.116V7.373l-5.355 3.15ZM6.121 4l5.794 5.794l6.07-3.571A2.5 2.5 0 0 0 15.5 4H6.121Z"
      />
    </svg>
  );
}
export default MailOffFilled;
