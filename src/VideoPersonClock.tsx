import type { SVGProps } from "react";

export function VideoPersonClock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm0-1a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3ZM2 4.5A1.5 1.5 0 0 1 3.5 3h13A1.5 1.5 0 0 1 18 4.5v5.757a5.503 5.503 0 0 0-1-.657V4.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H6v-1.5A1.5 1.5 0 0 1 7.5 11h2.757a5.503 5.503 0 0 0-.657 1H7.5a.5.5 0 0 0-.5.5V14h2.022a5.571 5.571 0 0 0 0 1H3.5A1.5 1.5 0 0 1 2 13.5v-9Zm17 10a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0ZM14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5Z"
      />
    </svg>
  );
}
export default VideoPersonClock;
