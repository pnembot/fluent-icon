import type { SVGProps } from "react";

export function CaretLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 14.204a1 1 0 0 1-1.628.778l-4.723-3.815a1.5 1.5 0 0 1 0-2.334l4.723-3.814A1 1 0 0 1 13 5.797v8.407Z"
      />
    </svg>
  );
}
export default CaretLeftFilled;
