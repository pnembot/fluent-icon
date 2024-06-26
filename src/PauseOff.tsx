import type { SVGProps } from "react";

export function PauseOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m3 3.707l-.854-.853a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-.449-.45A1.498 1.498 0 0 1 15.5 18h-2a1.5 1.5 0 0 1-1.5-1.5v-3.793l-4-4V16.5A1.5 1.5 0 0 1 6.5 18h-2A1.5 1.5 0 0 1 3 16.5V3.707Zm4 4l-3-3V16.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V7.707Zm6 6V16.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .468-.325L13 13.707ZM7 3.5v1.379l1 1V3.5A1.5 1.5 0 0 0 6.5 2h-2c-.117 0-.23.013-.34.039L5.121 3H6.5a.5.5 0 0 1 .5.5Zm5 6.379l1 1V3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v10.379l1 1V3.5A1.5 1.5 0 0 0 15.5 2h-2A1.5 1.5 0 0 0 12 3.5v6.379Z"
      />
    </svg>
  );
}
export default PauseOff;
