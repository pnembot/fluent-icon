import type { SVGProps } from "react";

export function ChevronUpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.207 12.267a.75.75 0 0 1 .026-1.06l5.25-5.002a.75.75 0 0 1 1.035 0l5.25 5.001a.75.75 0 0 1-1.034 1.086L10 7.784l-4.734 4.508a.75.75 0 0 1-1.06-.025Z"
      />
    </svg>
  );
}
export default ChevronUpFilled;
