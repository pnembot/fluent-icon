import type { SVGProps } from "react";

export function BatteryCharge(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.996 7.354L16 7.5v.833l1.167.015a.83.83 0 0 1 .827.732l.006.101v1.667a.833.833 0 0 1-.721.826l-.112.007H16v.819a2.5 2.5 0 0 1-2.353 2.495L13.5 15H7c-.301-.005-.502-.202-.502-.505S6.698 14 7 14h6.756A1.25 1.25 0 0 0 15 12.87l.006-.12V7.245A1.25 1.25 0 0 0 13.876 6l-.12-.006h-4.22C9.2 5.995 9 5.857 9 5.499S9.223 5 9.535 5H13.5a2.5 2.5 0 0 1 2.496 2.353ZM6.29 3.34l.085-.006c.316 0 .578.235.619.54L7 3.959v1.042l.375.005c.345 0 .625.28.625.625v1.912c0 .805-.653 1.458-1.458 1.458H3.458A1.458 1.458 0 0 1 2 7.543V5.631c0-.345.28-.625.625-.625H3V3.965c0-.317.235-.578.54-.62l.085-.005c.316 0 .578.235.62.54l.005.085v1.041l1.5-.005V3.959c0-.316.236-.578.54-.62ZM5.5 9v5.5a.5.5 0 1 1-1 0V9h1ZM7 6v1.5a.5.5 0 0 1-.41.493L6.5 8h-3a.5.5 0 0 1-.492-.41L3 7.5V6h4Z"
      />
    </svg>
  );
}
export default BatteryCharge;
