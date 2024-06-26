import type { SVGProps } from "react";

export function ClockToolboxFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 1a8 8 0 1 1 0 16v-3.5a2.5 2.5 0 0 0-2.042-2.458A2.5 2.5 0 0 0 6.5 9h-2a2.49 2.49 0 0 0-1.485.489A8 8 0 0 1 11 1Zm-.5 3a.5.5 0 0 0-.5.5v5l.008.09a.5.5 0 0 0 .492.41h3l.09-.008A.5.5 0 0 0 13.5 9H11V4.5l-.008-.09A.5.5 0 0 0 10.5 4ZM3 12v-.5A1.5 1.5 0 0 1 4.5 10h2A1.5 1.5 0 0 1 8 11.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15H8v-.5a.5.5 0 0 0-1 0v.5H4v-.5a.5.5 0 0 0-1 0v.5H1v-1.5A1.5 1.5 0 0 1 2.5 12H3Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM8 16h2v1.5A1.5 1.5 0 0 1 8.5 19h-6A1.5 1.5 0 0 1 1 17.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"
      />
    </svg>
  );
}
export default ClockToolboxFilled;
