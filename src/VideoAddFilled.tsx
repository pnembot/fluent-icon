import type { SVGProps } from "react";

export function VideoAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 5.5A2.5 2.5 0 0 0 11.5 3h-6A2.5 2.5 0 0 0 3 5.5v3.1a5.5 5.5 0 0 1 7.793 6.4h.707a2.5 2.5 0 0 0 2.5-2.5v-7Zm1 1.43v4.152l2.764 2.35A.75.75 0 0 0 19 12.86V5.193a.75.75 0 0 0-1.23-.575L15 6.93Zm-5 6.57a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V13H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V14h1.5a.5.5 0 0 0 0-1H6v-1.5Z"
      />
    </svg>
  );
}
export default VideoAddFilled;
