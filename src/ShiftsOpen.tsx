import type { SVGProps } from "react";

export function ShiftsOpen(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 5.5A1.5 1.5 0 0 1 5.5 4h2a.5.5 0 0 0 0-1h-2A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h2a.5.5 0 0 0 0-1h-2A1.5 1.5 0 0 1 4 14.5v-9ZM12.5 3a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 1 16 5.5v9a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 0 0 1h2a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-2ZM10 5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H10V5.5Z"
      />
    </svg>
  );
}
export default ShiftsOpen;
