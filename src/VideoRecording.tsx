import type { SVGProps } from "react";

export function VideoRecording(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.5 4A2.5 2.5 0 0 0 2 6.5v2.837c.31-.148.647-.251 1-.302V6.5A1.5 1.5 0 0 1 4.5 5h7A1.5 1.5 0 0 1 13 6.5v7a1.5 1.5 0 0 1-1.5 1.5H11v1h.5a2.5 2.5 0 0 0 2.5-2.5v-1l2.4 1.8a1 1 0 0 0 1.6-.8v-7a1 1 0 0 0-1.6-.8L14 7.5v-1A2.5 2.5 0 0 0 11.5 4h-7ZM14 8.75l3-2.25v7l-3-2.25v-2.5ZM1 12.5A2.5 2.5 0 0 1 3.5 10h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 7.5 19h-4A2.5 2.5 0 0 1 1 16.5v-4Zm4.02.034a.452.452 0 0 0-.447-.037a.49.49 0 0 0-.156.108a.51.51 0 0 0-.145.357v3.075a.502.502 0 0 0 .145.358a.563.563 0 0 0 .158.11a.45.45 0 0 0 .323.02a.52.52 0 0 0 .13-.064l2.296-1.567a.47.47 0 0 0 .163-.185a.536.536 0 0 0-.003-.487a.487.487 0 0 0-.168-.182L5.02 12.534Z"
      />
    </svg>
  );
}
export default VideoRecording;
