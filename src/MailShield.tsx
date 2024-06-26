import type { SVGProps } from "react";

export function MailShield(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 2.624a4.056 4.056 0 0 1-1-.277c-.606-.254-1.177-.662-1.716-1.225a.389.389 0 0 0-.566 0c-.995 1.036-2.095 1.545-3.318 1.545c-.22 0-.4.186-.4.416v2.501l.004.266c.042 1.247.38 2.3 1.006 3.15c.275.372.605.706.99 1c.523.4 1.148.727 1.873.979a.395.395 0 0 0 .254 0C17.686 10.089 19 8.266 19 5.584v-2.5l-.008-.085a.405.405 0 0 0-.392-.332c-.203 0-.403-.014-.6-.043ZM10 4H4.5A2.5 2.5 0 0 0 2 6.5v8A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-4.03a6.624 6.624 0 0 1-1 .738V14.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 14.5V7.963l6.746 3.968l.082.038a.5.5 0 0 0 .426-.038l2.049-1.206a6.045 6.045 0 0 1-.759-.714L10 10.92L3 6.802V6.5A1.5 1.5 0 0 1 4.5 5H10V4Z"
      />
    </svg>
  );
}
export default MailShield;
