import type { SVGProps } from "react";

export function StreamInputOutputFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.25 3.5A5.75 5.75 0 0 0 7.5 9.25v1a2.25 2.25 0 0 1-2.25 2.25h-2.5a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 0 .75-.75v-1A7.25 7.25 0 0 1 13.25 2h.5a.75.75 0 0 1 0 1.5h-.5Zm-2.75 6a3.25 3.25 0 0 1 3.25-3.25h3.5a.75.75 0 0 0 0-1.5h-3.5A4.75 4.75 0 0 0 9 9.5v1a3.25 3.25 0 0 1-3.25 3.25h-3a.75.75 0 0 0 0 1.5h3a4.75 4.75 0 0 0 4.75-4.75v-1Zm3.75-.5a.75.75 0 0 0-.75.75v1a7.26 7.26 0 0 1-.253 1.904a1.898 1.898 0 0 0-1.584.041A5.74 5.74 0 0 0 12 10.75v-1a2.25 2.25 0 0 1 2.25-2.25h3a.75.75 0 0 1 0 1.5h-3Zm-1.396 9.162a.5.5 0 0 1-.708.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 0 1 .708.707l-1.147 1.147h5.586l-1.147-1.147a.5.5 0 0 1 .708-.707l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.708-.707l1.147-1.146h-5.586l1.147 1.146Z"
      />
    </svg>
  );
}
export default StreamInputOutputFilled;
