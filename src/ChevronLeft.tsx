import type { SVGProps } from "react";

export function ChevronLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.353 15.854a.5.5 0 0 1-.707.001L6.162 10.39a.55.55 0 0 1 0-.78l5.484-5.464a.5.5 0 1 1 .706.708L7.188 10l5.164 5.147a.5.5 0 0 1 .001.707Z"
      />
    </svg>
  );
}
export default ChevronLeft;
