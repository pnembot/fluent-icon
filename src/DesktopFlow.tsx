import type { SVGProps } from "react";

export function DesktopFlow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.085 2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3v2H5.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1H13v-2h3a2 2 0 0 0 2-2V7h-1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10v-.5c0-.175.03-.344.085-.5ZM12 17H8v-2h4v2Zm3-14.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V5h-.78a.5.5 0 0 0-.474.342l-.544 1.632A1.5 1.5 0 0 1 11.78 8H11v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V7h.78a.5.5 0 0 0 .474-.342l.544-1.632A1.5 1.5 0 0 1 14.22 4H15V2.5ZM10 7H8v2h2V7Zm6-2h2V3h-2v2Z"
      />
    </svg>
  );
}
export default DesktopFlow;
