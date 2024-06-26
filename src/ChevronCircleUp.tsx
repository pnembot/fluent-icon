import type { SVGProps } from "react";

export function ChevronCircleUp(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 10a7 7 0 1 0 14 0a7 7 0 0 0-14 0Zm7 8a8 8 0 1 1 0-16a8 8 0 0 1 0 16Zm-3.146-6.146a.5.5 0 0 1-.708-.708l3.5-3.5a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1-.708.708L10 8.707l-3.146 3.147Z"
      />
    </svg>
  );
}
export default ChevronCircleUp;
