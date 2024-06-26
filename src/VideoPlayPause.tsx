import type { SVGProps } from "react";

export function VideoPlayPause(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5A1.5 1.5 0 0 1 11.5 5h1A1.5 1.5 0 0 1 14 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-7Zm1.5-.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1Zm3.5.5A1.5 1.5 0 0 1 16.5 5h1A1.5 1.5 0 0 1 19 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-7Zm1.5-.5a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-1ZM3 6.502a.25.25 0 0 1 .385-.21l5.496 3.536a.25.25 0 0 1-.002.422l-5.496 3.46A.25.25 0 0 1 3 13.5V6.502Zm.926-1.051A1.25 1.25 0 0 0 2 6.502v6.997a1.25 1.25 0 0 0 1.916 1.058l5.496-3.461a1.25 1.25 0 0 0 .01-2.11L3.927 5.452Z"
      />
    </svg>
  );
}
export default VideoPlayPause;
