import type { SVGProps } from "react";

export function VideoSecurity(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.894l3.255-1.831a.5.5 0 0 1 .745.435V11.5a.5.5 0 0 1-.746.435L14 10.1v.9a2 2 0 0 1-2 2h-2v1a4 4 0 0 1-4 4H3.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h2A1.5 1.5 0 0 0 7 13.5V13H4a2 2 0 0 1-2-2V5Zm6 8v.5A2.5 2.5 0 0 1 5.5 16H4v1h2a3 3 0 0 0 3-3v-1H8Zm-4-1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1Zm10.005-4.96v1.914L17 10.644v-5.29l-2.995 1.685Z"
      />
    </svg>
  );
}
export default VideoSecurity;
