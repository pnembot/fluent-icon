import type { SVGProps } from "react";

export function VideoOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.355 1.354A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.292-1.5l3.354 3.354a.5.5 0 0 0 .708-.708l-15-15Zm10.133 11.549A1.5 1.5 0 0 1 11.5 15h-7A1.5 1.5 0 0 1 3 13.5v-7a1.5 1.5 0 0 1 1.305-1.488l8.683 8.683ZM13 10.879l3.47 3.469A1 1 0 0 0 18 13.5v-7a1 1 0 0 0-1.6-.8L14 7.5v-1A2.5 2.5 0 0 0 11.5 4H6.121l1 1H11.5A1.5 1.5 0 0 1 13 6.5v4.379Zm1-2.129l3-2.25v7l-3-2.25v-2.5Z"
      />
    </svg>
  );
}
export default VideoOff;
