import type { SVGProps } from "react";

export function ClockToolbox(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 1a8 8 0 1 1 0 16v-1a7 7 0 1 0-7-7v.05a2.488 2.488 0 0 0-.985.439A8 8 0 0 1 11 1Zm-.5 3a.5.5 0 0 1 .492.41L11 4.5V9h2.5a.5.5 0 0 1 .09.992L13.5 10h-3a.5.5 0 0 1-.492-.41L10 9.5v-5a.5.5 0 0 1 .5-.5ZM3 12v-.5A1.5 1.5 0 0 1 4.5 10h2A1.5 1.5 0 0 1 8 11.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15H8v-.5a.5.5 0 0 0-1 0v.5H4v-.5a.5.5 0 0 0-1 0v.5H1v-1.5A1.5 1.5 0 0 1 2.5 12H3Zm1-.5v.5h3v-.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5ZM8 16h2v1.5A1.5 1.5 0 0 1 8.5 19h-6A1.5 1.5 0 0 1 1 17.5V16h2v.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16Z"
      />
    </svg>
  );
}
export default ClockToolbox;
