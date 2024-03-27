import type { SVGProps } from "react";

export function TableSwitchFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.854 1.146a.5.5 0 1 0-.708.708L8.293 3H6a3 3 0 0 0-3 3v2.293L1.854 7.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 1 0-.708-.708L4 8.293V6a2 2 0 0 1 2-2h2.293L7.146 5.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2Zm.707 5.415A1.494 1.494 0 0 1 8 6.915V7h4V3h-1.085a1.5 1.5 0 0 1-.354 1.56l-2 2Zm-4 4A1.5 1.5 0 0 1 3 10.915V12h4V8h-.085a1.49 1.49 0 0 1-.354.56l-2 2ZM13 17h1.5a2.5 2.5 0 0 0 2.5-2.5V13h-4v4Zm0-5V8h4v4h-4Zm-1 0H8V8h4v4Zm-4 1h4v4H8v-4Zm-5 0h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Z"
      />
    </svg>
  );
}
export default TableSwitchFilled;
