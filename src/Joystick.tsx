import type { SVGProps } from "react";

export function Joystick(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4Zm.5 4.959a3 3 0 1 0-1 0V11h-2A1.5 1.5 0 0 0 6 12.5v.5H5a2 2 0 0 0-2 2v2.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V15a2 2 0 0 0-2-2h-1v-.5a1.5 1.5 0 0 0-1.5-1.5h-2V7.959ZM7.5 12h5a.5.5 0 0 1 .5.5v.5H7v-.5a.5.5 0 0 1 .5-.5ZM5 14h10a1 1 0 0 1 1 1v2H4v-2a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}
export default Joystick;
