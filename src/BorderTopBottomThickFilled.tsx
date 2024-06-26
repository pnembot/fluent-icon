import type { SVGProps } from "react";

export function BorderTopBottomThickFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.121 5.522A1 1 0 0 1 6 5h8a1 1 0 0 1 .879.522l.006-.004a1 1 0 1 0 1.62-1.162l.003-.003A2.997 2.997 0 0 0 14 3H6a2.997 2.997 0 0 0-2.508 1.353l.004.003a1 1 0 1 0 1.62 1.162l.005.004Zm0 8.956A1 1 0 0 0 6 15h8a1 1 0 0 0 .879-.522l.006.004a1 1 0 1 1 1.62 1.162l.003.003A2.997 2.997 0 0 1 14 17H6a2.997 2.997 0 0 1-2.508-1.353l.004-.002a1 1 0 1 1 1.62-1.162l.005-.005ZM4 12a1 1 0 0 1-1-1V9a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1Zm11-1a1 1 0 0 0 2 0V9a1 1 0 1 0-2 0v2Z"
      />
    </svg>
  );
}
export default BorderTopBottomThickFilled;
