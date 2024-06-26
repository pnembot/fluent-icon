import type { SVGProps } from "react";

export function BorderBottomThickFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 3a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2H9Zm-4.644.496a1 1 0 1 1 1.162 1.62l.004.005a1.005 1.005 0 0 0-.4.4l-.006-.003a1 1 0 1 1-1.62-1.162l-.004-.003c.225-.342.519-.636.861-.861l.003.004ZM6 15a1 1 0 0 1-.879-.522l-.006.004a1 1 0 1 0-1.62 1.162l-.003.003A2.997 2.997 0 0 0 6 17h8a2.997 2.997 0 0 0 2.508-1.353l-.004-.002a1 1 0 1 0-1.62-1.162l-.005-.005a1 1 0 0 1-.879.523H6Zm9.645-11.505a1 1 0 1 0-1.162 1.62l-.005.005c.17.092.309.232.4.4l.007-.003a1 1 0 1 0 1.62-1.162l.003-.003a3.017 3.017 0 0 0-.86-.861l-.003.004ZM4 12a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Zm11-1a1 1 0 1 0 2 0V9a1 1 0 1 0-2 0v2Z"
      />
    </svg>
  );
}
export default BorderBottomThickFilled;
