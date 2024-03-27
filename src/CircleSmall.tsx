import type { SVGProps } from "react";

export function CircleSmall(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm0 1a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"
      />
    </svg>
  );
}
export default CircleSmall;
