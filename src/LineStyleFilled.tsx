import type { SVGProps } from "react";

export function LineStyleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.75A.75.75 0 0 1 2.75 4h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 2 4.75Zm6 0A.75.75 0 0 1 8.75 4h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 8 4.75Zm6 0a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm-12 5A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75ZM3.25 14a1.25 1.25 0 1 0 0 2.5h13.5a1.25 1.25 0 1 0 0-2.5H3.25Z"
      />
    </svg>
  );
}
export default LineStyleFilled;
