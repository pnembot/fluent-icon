import type { SVGProps } from "react";

export function ArrowClockwiseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.628 2.025a8 8 0 1 0 7.367 7.714a.75.75 0 1 0-1.5.045a6.5 6.5 0 1 1-1.573-4.029l.204.248h-2.379l-.101.008a.75.75 0 0 0 0 1.486l.101.007h4l.102-.007a.75.75 0 0 0 .641-.641l.007-.102v-4l-.007-.102a.75.75 0 0 0-.641-.641l-.102-.007l-.102.007a.75.75 0 0 0-.641.641l-.007.102l.001 1.953a7.977 7.977 0 0 0-5.37-2.682Z"
      />
    </svg>
  );
}
export default ArrowClockwiseFilled;
