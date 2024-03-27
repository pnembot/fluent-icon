import type { SVGProps } from "react";

export function ChevronUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.147 12.353a.5.5 0 0 1-.001-.707L9.61 6.162a.55.55 0 0 1 .779 0l5.465 5.484a.5.5 0 0 1-.708.706L10 7.188l-5.146 5.164a.5.5 0 0 1-.707.001Z"
      />
    </svg>
  );
}
export default ChevronUp;
