import type { SVGProps } from "react";

export function ChevronLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.269 15.794a.75.75 0 0 1-1.06-.026l-5.002-5.25a.75.75 0 0 1 0-1.035l5.001-5.25a.75.75 0 1 1 1.086 1.034l-4.508 4.734l4.508 4.733a.75.75 0 0 1-.025 1.06Z"
      />
    </svg>
  );
}
export default ChevronLeftFilled;
