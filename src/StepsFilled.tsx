import type { SVGProps } from "react";

export function StepsFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4h-1V3h-3v3a1 1 0 0 1-1 1H8v3a1 1 0 0 1-1 1H4v3h4v1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3V7a1 1 0 0 1 1-1h3V3Zm2 6a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 1-2.5 2.5H10a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3V9Z"
      />
    </svg>
  );
}
export default StepsFilled;
