import type { SVGProps } from "react";

export function FluentFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.276 2.053a.5.5 0 0 1 .448 0l5 2.5a.5.5 0 0 1 0 .894L11.618 7.5l4.106 2.053a.5.5 0 0 1 0 .894L11 12.81v4.69a.5.5 0 0 1-.757.429l-5-3A.5.5 0 0 1 5 14.5V5a.5.5 0 0 1 .276-.447l5-2.5Z"
      />
    </svg>
  );
}
export default FluentFilled;
