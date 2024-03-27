import type { SVGProps } from "react";

export function SendClock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.184 1.112a.5.5 0 0 1 .54-.06l15 7.5a.5.5 0 1 1-.448.895L3.27 2.444L4.884 8.5H11.5a.5.5 0 1 1 0 1H4.884L3.27 15.556l6.104-3.052c-.158.406-.27.836-.327 1.282l-6.322 3.161a.5.5 0 0 1-.707-.576L3.983 9L2.017 1.629a.5.5 0 0 1 .167-.517ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
}
export default SendClock;
