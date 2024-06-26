import type { SVGProps } from "react";

export function Midi(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12.5 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM5.75 7.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM9 6.751a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0ZM2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-11ZM3 5v4h14V5H3Zm5 5H6v3.5a.5.5 0 0 1-1 0V10H3v5h14v-5h-2v3.5a.5.5 0 0 1-1 0V10h-2v3.5a.5.5 0 0 1-1 0V10H9v3.5a.5.5 0 0 1-1 0V10Z"
      />
    </svg>
  );
}
export default Midi;
