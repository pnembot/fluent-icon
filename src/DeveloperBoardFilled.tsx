import type { SVGProps } from "react";

export function DeveloperBoardFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM8 2.5a.5.5 0 0 0-1 0V4h-.5A2.5 2.5 0 0 0 4 6.5V7H2.5a.5.5 0 0 0 0 1H4v1.5H2.5a.5.5 0 0 0 0 1H4V12H2.5a.5.5 0 0 0 0 1H4v.5A2.5 2.5 0 0 0 6.5 16H7v1.5a.5.5 0 0 0 1 0V16h1.5v1.5a.5.5 0 0 0 1 0V16H12v1.5a.5.5 0 0 0 1 0V16h.5a2.5 2.5 0 0 0 2.5-2.5V13h1.5a.5.5 0 0 0 0-1H16v-1.5h1.5a.5.5 0 0 0 0-1H16V8h1.5a.5.5 0 0 0 0-1H16v-.5A2.5 2.5 0 0 0 13.5 4H13V2.5a.5.5 0 0 0-1 0V4h-1.5V2.5a.5.5 0 0 0-1 0V4H8V2.5Zm5 7.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}
export default DeveloperBoardFilled;
