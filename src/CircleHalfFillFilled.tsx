import type { SVGProps } from "react";

export function CircleHalfFillFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.543 9.25h12.914a6.501 6.501 0 0 0-12.914 0ZM2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0Z"
      />
    </svg>
  );
}
export default CircleHalfFillFilled;
