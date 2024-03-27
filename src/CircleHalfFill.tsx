import type { SVGProps } from "react";

export function CircleHalfFill(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm0 1a7 7 0 0 1 6.982 6.5H3.018A7 7 0 0 1 10 3Z"
      />
    </svg>
  );
}
export default CircleHalfFill;
