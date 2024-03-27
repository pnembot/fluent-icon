import type { SVGProps } from "react";

export function Bug(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 2.5a.5.5 0 0 0-1 0V3c0 .397.116.767.315 1.078A3.001 3.001 0 0 0 6 7h-.5A1.5 1.5 0 0 1 4 5.5v-2a.5.5 0 0 0-1 0v2A2.5 2.5 0 0 0 5.5 8H6v1.5H2.5a.5.5 0 0 0 0 1H6V12h-.5A2.5 2.5 0 0 0 3 14.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 1 5.5 13H6a4 4 0 0 0 8 0h.5a1.5 1.5 0 0 1 1.5 1.5v2a.5.5 0 0 0 1 0v-2a2.5 2.5 0 0 0-2.5-2.5H14v-1.5h3.5a.5.5 0 0 0 0-1H14V8h.5A2.5 2.5 0 0 0 17 5.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 1 14.5 7H14a3.001 3.001 0 0 0-2.315-2.922c.2-.31.315-.68.315-1.078v-.5a.5.5 0 0 0-1 0V3a1 1 0 1 1-2 0v-.5ZM13 7v6a3 3 0 1 1-6 0V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"
      />
    </svg>
  );
}
export default Bug;
