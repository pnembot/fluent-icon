import type { SVGProps } from "react";

export function Eyedropper(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.247 2.754a2.621 2.621 0 0 0-3.708 0L12.5 3.794l-.351-.352a1.5 1.5 0 0 0-2.121 0l-.586.586a1.5 1.5 0 0 0 0 2.122l.35.35l-6.353 6.354A1.5 1.5 0 0 0 3 13.914v.502l-.964 2.258c-.356.833.49 1.672 1.32 1.31L5.605 17h.48a1.5 1.5 0 0 0 1.062-.439l6.353-6.353l.353.353a1.5 1.5 0 0 0 2.122 0l.585-.586a1.5 1.5 0 0 0 0-2.121l-.353-.353l1.04-1.04a2.621 2.621 0 0 0 0-3.707Zm-3 .707a1.621 1.621 0 0 1 2.292 2.293l-1.393 1.393a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 1 0 .707l-.585.586a.5.5 0 0 1-.708 0l-4.41-4.412a.5.5 0 0 1 0-.707l.586-.585a.5.5 0 0 1 .707 0l.704.704a.5.5 0 0 0 .707 0l1.393-1.393Zm-1.454 6.04l-6.354 6.353a.5.5 0 0 1-.353.146H5.5a.5.5 0 0 0-.2.042l-2.345 1.025l1.005-2.352a.5.5 0 0 0 .04-.197v-.603a.5.5 0 0 1 .147-.354L10.5 7.208L12.793 9.5Z"
      />
    </svg>
  );
}
export default Eyedropper;
