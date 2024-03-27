import type { SVGProps } from "react";

export function StreamInputOutput(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 3a6 6 0 0 0-6 6v1a2 2 0 0 1-2 2H2.5a.5.5 0 0 1 0-1H5a1 1 0 0 0 1-1V9a7 7 0 0 1 7-7h.5a.5.5 0 0 1 0 1H13Zm-3 6.5A3.5 3.5 0 0 1 13.5 6h4a.5.5 0 0 0 0-1h-4A4.5 4.5 0 0 0 9 9.5v1A3.5 3.5 0 0 1 5.5 14h-3a.5.5 0 0 0 0 1h3a4.5 4.5 0 0 0 4.5-4.5v-1Zm3 .5c0-.6.4-1 1-1h3.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H14c-1.1 0-2 .9-2 2v1c0 .9-.2 1.7-.5 2.4c.3-.2.6-.4 1-.4h.2c.2-.6.3-1.3.3-2v-1Zm-.146 8.162a.5.5 0 0 1-.708.707l-2-2a.5.5 0 0 1 0-.707l2-2a.5.5 0 0 1 .708.707l-1.147 1.147h5.586l-1.147-1.147a.5.5 0 0 1 .708-.707l2 2a.5.5 0 0 1 0 .707l-2 2a.5.5 0 0 1-.708-.707l1.147-1.146h-5.586l1.147 1.146Z"
      />
    </svg>
  );
}
export default StreamInputOutput;
