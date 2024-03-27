import type { SVGProps } from "react";

export function SubtractFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      {...rest}
    >
      <rect
        width="14"
        height="1.5"
        x="3"
        y="9.25"
        fill="currentColor"
        rx=".75"
      />
    </svg>
  );
}
export default SubtractFilled;
