import type { SVGProps } from "react";

export function TabDesktopArrowClockwise(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.997 5.5a2.5 2.5 0 0 1 2.5-2.5h9a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-3.754c.253-.307.474-.642.657-1h3.097a1.5 1.5 0 0 0 1.5-1.5V7h-6.5a1.5 1.5 0 0 1-1.5-1.5V4h-2.5a1.5 1.5 0 0 0-1.5 1.5v3.101a5.507 5.507 0 0 0-1 .659V5.5Zm13 .5v-.5a1.5 1.5 0 0 0-1.5-1.5h-5.5v1.5a.5.5 0 0 0 .5.5h6.5ZM9.5 8.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.804a3.5 3.5 0 1 0 1.696 3a.5.5 0 0 1 1 0a4.5 4.5 0 1 1-2-3.742V9a.5.5 0 0 1 .5-.5Z"
      />
    </svg>
  );
}
export default TabDesktopArrowClockwise;
