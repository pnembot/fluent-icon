import type { SVGProps } from "react";

export function NavigationUnread(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.994 4.42a2.25 2.25 0 1 0-.041.294l.001-.01c.02-.093.032-.188.04-.284ZM2.5 4h10.01a3.283 3.283 0 0 0 .077 1H2.5a.5.5 0 0 1 0-1ZM2 9.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5Zm.5 4.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Z"
      />
    </svg>
  );
}
export default NavigationUnread;
