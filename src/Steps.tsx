import type { SVGProps } from "react";

export function Steps(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v4h-1V3h-3v3a1 1 0 0 1-1 1H8v3a1 1 0 0 1-1 1H4v3h4v1H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3V7a1 1 0 0 1 1-1h3V3Zm3 5a1 1 0 0 0-1 1v3h-3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5.5a2.5 2.5 0 0 0 2.5-2.5V9a1 1 0 0 0-1-1h-3Zm0 1h3v5.5a1.5 1.5 0 0 1-1.5 1.5H10v-3h3a1 1 0 0 0 1-1V9Z"
      />
    </svg>
  );
}
export default Steps;
