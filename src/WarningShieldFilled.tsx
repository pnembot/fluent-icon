import type { SVGProps } from "react";

export function WarningShieldFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <g fill="currentColor">
        <path d="M7.686 1.852L1.127 13.777A1.5 1.5 0 0 0 2.442 16h7.934a7.266 7.266 0 0 1-.371-2.117v-.008L10 13.593v-2.51c0-.743.589-1.416 1.4-1.416c.891 0 1.73-.351 2.555-1.195l-3.64-6.62a1.5 1.5 0 0 0-2.629 0ZM9 5.75a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 9 5.75Zm.75 7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z" />
        <path d="M17 10.347a4.629 4.629 0 0 1-1-.582a6.056 6.056 0 0 1-.716-.642a.389.389 0 0 0-.566 0c-.995 1.035-2.095 1.544-3.318 1.544a.41.41 0 0 0-.4.417v2.5l.004.266c.027.797.174 1.514.44 2.15A4.813 4.813 0 0 0 13 18c.524.4 1.15.727 1.874.979a.395.395 0 0 0 .254 0c2.56-.89 3.873-2.712 3.873-5.394v-2.501L18.992 11a.405.405 0 0 0-.392-.333a4.053 4.053 0 0 1-1.6-.32Z" />
      </g>
    </svg>
  );
}
export default WarningShieldFilled;
