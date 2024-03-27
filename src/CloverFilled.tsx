import type { SVGProps } from "react";

export function CloverFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 2a3.5 3.5 0 1 0 0 7h3a.5.5 0 0 0 .5-.5v-3A3.5 3.5 0 0 0 5.5 2Zm0 15a3.5 3.5 0 1 1 0-7h3a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 5.5 17Zm8-15a3.5 3.5 0 1 1 0 7h-3a.5.5 0 0 1-.5-.5v-3A3.5 3.5 0 0 1 13.5 2Zm0 15a3.5 3.5 0 1 0 0-7h-3a.5.5 0 0 0-.5.5v3a3.5 3.5 0 0 0 3.5 3.5Z"
      />
    </svg>
  );
}
export default CloverFilled;
