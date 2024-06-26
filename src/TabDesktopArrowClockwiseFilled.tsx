import type { SVGProps } from "react";

export function TabDesktopArrowClockwiseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.497 3a2.5 2.5 0 0 0-2.5 2.5v3.76A5.478 5.478 0 0 1 6.5 8c.59 0 1.159.093 1.692.265A1.5 1.5 0 0 1 11 9v1.337c.63.895 1 1.986 1 3.163c0 1.33-.472 2.55-1.257 3.5h3.754a2.5 2.5 0 0 0 2.5-2.5V7h-7.5a1.5 1.5 0 0 1-1.5-1.5V3h-2.5Zm3.5 0v2.5a.5.5 0 0 0 .5.5h7.5v-.5a2.5 2.5 0 0 0-2.5-2.5h-5.5ZM10 11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h.804a3.5 3.5 0 1 0 1.696 3a.5.5 0 0 1 1 0a4.5 4.5 0 1 1-2-3.742V9a.498.498 0 0 1 .5-.5a.5.5 0 0 1 .5.5v2Z"
      />
    </svg>
  );
}
export default TabDesktopArrowClockwiseFilled;
