import type { SVGProps } from "react";

export function Fluent(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.276 2.053a.5.5 0 0 1 .448 0l5 2.5a.5.5 0 0 1 0 .894L11.618 7.5l4.106 2.053a.5.5 0 0 1 0 .894L11 12.81v4.69a.5.5 0 0 1-.757.429l-5-3A.5.5 0 0 1 5 14.5V5a.5.5 0 0 1 .276-.447l5-2.5ZM11 11.69L14.382 10L11 8.309v3.382Zm-1-3.382L6.618 10L10 11.691V8.309Zm0-1.618V3.309L6.618 5L10 6.691Zm-4-.882V9.19L9.382 7.5L6 5.809Zm0 5v3.408l4 2.4v-3.808l-4-2Zm5-7.5V6.69L14.382 5L11 3.309Z"
      />
    </svg>
  );
}
export default Fluent;
