import type { SVGProps } from "react";

export function VideoPlayPauseFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11.5 5A1.5 1.5 0 0 0 10 6.5v7a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 12.5 5h-1Zm5 0A1.5 1.5 0 0 0 15 6.5v7a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 17.5 5h-1Zm-12.574.45A1.25 1.25 0 0 0 2 6.503V13.5a1.25 1.25 0 0 0 1.916 1.058l5.496-3.461a1.25 1.25 0 0 0 .01-2.11L3.927 5.452Z"
      />
    </svg>
  );
}
export default VideoPlayPauseFilled;
