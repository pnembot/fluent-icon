import type { SVGProps } from "react";

export function NavigationLocationTargetFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM2 10.75a.75.75 0 0 1 .75-.75h11.336a1.51 1.51 0 0 0-.068.268a4.474 4.474 0 0 0-1.852 1.232H2.75a.75.75 0 0 1-.75-.75ZM2.75 15h7.336a1.5 1.5 0 0 0 1.182.982c.062.177.135.35.218.518H2.75a.75.75 0 0 1 0-1.5Zm13.306.332a1 1 0 1 1-1.111-1.663a1 1 0 0 1 1.11 1.662ZM18.949 14h.551a.5.5 0 0 1 0 1h-.551A3.487 3.487 0 0 1 16 17.949v.551a.5.5 0 0 1-1 0v-.551A3.487 3.487 0 0 1 12.051 15H11.5a.5.5 0 0 1 0-1h.551A3.487 3.487 0 0 1 15 11.051V10.5a.5.5 0 0 1 1 0v.551A3.487 3.487 0 0 1 18.949 14Zm-3.204 2.988a2.5 2.5 0 1 0-.49-4.976a2.5 2.5 0 0 0 .49 4.976Z"
      />
    </svg>
  );
}
export default NavigationLocationTargetFilled;
