import type { SVGProps } from "react";

export function SendClockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.724 1.053a.5.5 0 0 0-.707.576l1.498 5.618a.5.5 0 0 0 .4.364l6.855 1.142c.279.047.279.447 0 .494l-6.854 1.142a.5.5 0 0 0-.401.364l-1.498 5.618a.5.5 0 0 0 .707.576l6.322-3.16a5.501 5.501 0 0 1 8.156-4.079l.522-.26a.5.5 0 0 0 0-.895l-15-7.5ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
}
export default SendClockFilled;
