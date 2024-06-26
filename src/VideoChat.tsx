import type { SVGProps } from "react";

export function VideoChat(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v3.1a5.463 5.463 0 0 1 1-.393V5.5A1.5 1.5 0 0 1 5.5 4h7A1.5 1.5 0 0 1 14 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-1.522a5.489 5.489 0 0 1-.184 1H12.5a2.5 2.5 0 0 0 2.5-2.5v-1l2.4 1.8a1 1 0 0 0 1.6-.8v-7a1 1 0 0 0-1.6-.8L15 6.5v-1A2.5 2.5 0 0 0 12.5 3h-7ZM15 7.75l3-2.25v7l-3-2.25v-2.5ZM5.5 18a4.5 4.5 0 1 0-3.936-2.318l-.545 1.789a.41.41 0 0 0 .51.51l1.79-.544A4.48 4.48 0 0 0 5.5 18ZM3 12.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm.5 2.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1h-2Z"
      />
    </svg>
  );
}
export default VideoChat;
