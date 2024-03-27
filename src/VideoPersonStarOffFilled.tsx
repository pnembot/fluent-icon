import type { SVGProps } from "react";

export function VideoPersonStarOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.16 1.158A1.5 1.5 0 0 0 2 5.5v9A1.5 1.5 0 0 0 3.5 16h5.707A5.504 5.504 0 0 1 9 14.5c0-.9.216-1.75.6-2.5H7.5A1.5 1.5 0 0 0 6 13.5V15H3.5a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h.793l3.222 3.222a2.5 2.5 0 0 0 2.754 2.763l.004-.005l.711.711a4.5 4.5 0 0 0 6.37 6.287a.5.5 0 0 0 .5-.832l-15-15Zm13.643 15.058c-.127.267-.47.403-.747.194l-1.25-.947l-1.25.947c-.392.297-.92-.103-.77-.583l.477-1.532l-1.25-.947c-.392-.297-.19-.944.294-.944h.684l3.812 3.812ZM8.57 6.449l3.248 3.248c.16-.09.325-.171.494-.245A2.5 2.5 0 0 0 8.57 6.45Zm3.99 3.99l1.454 1.454l.01-.033c.15-.48.802-.48.952 0l.45 1.445l.087.087H17c.484 0 .686.647.294.944l-.476.36l1.744 1.744a4.5 4.5 0 0 0-6.002-6.002ZM6.12 4l1 1h9.38a.5.5 0 0 1 .5.5v4.1c.358.183.693.404 1 .657V5.5A1.5 1.5 0 0 0 16.5 4H6.121Z"
      />
    </svg>
  );
}
export default VideoPersonStarOffFilled;
