import type { SVGProps } from "react";

export function TabDesktopClockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v4.1a5.5 5.5 0 0 1 7.4 7.4h4.1a2.5 2.5 0 0 0 2.5-2.5V7H9.5A1.5 1.5 0 0 1 8 5.5V3H5.5ZM9 3v2.5a.5.5 0 0 0 .5.5H17v-.5A2.5 2.5 0 0 0 14.5 3H9ZM5.5 19a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-7a.5.5 0 0 1 .5.5V14h1a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default TabDesktopClockFilled;
