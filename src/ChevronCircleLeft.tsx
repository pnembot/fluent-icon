import type { SVGProps } from "react";

export function ChevronCircleLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3a7 7 0 1 1 0 14a7 7 0 0 1 0-14Zm8 7a8 8 0 1 0-16 0a8 8 0 0 0 16 0Zm-6.146-3.146a.5.5 0 0 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L8.707 10l3.147-3.146Z"
      />
    </svg>
  );
}
export default ChevronCircleLeft;
