import type { SVGProps } from "react";

export function BugProhibited(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.18 15.872c.097.375.233.74.407 1.086A3.986 3.986 0 0 1 6 13h-.5A1.5 1.5 0 0 0 4 14.5v2a.5.5 0 0 1-1 0v-2A2.5 2.5 0 0 1 5.5 12H6v-1.5H2.5a.5.5 0 0 1 0-1H6V8h-.5A2.5 2.5 0 0 1 3 5.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 0 5.5 7H6a3 3 0 0 1 2.315-2.922A1.994 1.994 0 0 1 8 3v-.5a.5.5 0 0 1 1 0V3a1 1 0 0 0 2 0v-.5a.5.5 0 0 1 1 0V3a2 2 0 0 1-.315 1.078A3 3 0 0 1 14 7h.5A1.5 1.5 0 0 0 16 5.5v-2a.5.5 0 0 1 1 0v2A2.5 2.5 0 0 1 14.5 8H14v1.025a5.5 5.5 0 0 0-1 .188V7a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2.99 2.99 0 0 0 2.18 2.872ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-7.3 2.1l4.9-4.9a3.5 3.5 0 0 0-4.9 4.9Zm6.3-2.1a3.482 3.482 0 0 0-.7-2.1l-4.9 4.9a3.5 3.5 0 0 0 5.6-2.8Z"
      />
    </svg>
  );
}
export default BugProhibited;
