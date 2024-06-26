import type { SVGProps } from "react";

export function EraserSegment(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.318 2.44a1.5 1.5 0 0 0-2.121 0l-8.76 8.759a1.5 1.5 0 0 0 0 2.121l4.243 4.243c.313.313.73.459 1.14.437h6.265a1.5 1.5 0 1 0 0-1h-4.72l8.196-8.197a1.5 1.5 0 0 0 0-2.121l-4.243-4.243Zm-1.414.706a.5.5 0 0 1 .707 0l4.243 4.243a.5.5 0 0 1 0 .707l-6.366 6.366l-4.95-4.95l6.366-6.366ZM4.831 10.22l4.95 4.95l-1.687 1.687a.5.5 0 0 1-.707 0l-4.243-4.243a.5.5 0 0 1 0-.707l1.687-1.687Z"
      />
    </svg>
  );
}
export default EraserSegment;
