import type { SVGProps } from "react";

export function VideoClipMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 11.252V6.756a.75.75 0 0 1 1.171-.62l3.61 2.45a.5.5 0 0 1 .001.828l-3.61 2.458A.75.75 0 0 1 7 11.252ZM2 5.5A2.5 2.5 0 0 1 4.5 3h9A2.5 2.5 0 0 1 16 5.5v7a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 12.5v-7ZM4.5 4A1.5 1.5 0 0 0 3 5.5v7A1.5 1.5 0 0 0 4.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 4h-9Zm0 12c.456.607 1.182 1 2 1H14a4 4 0 0 0 4-4V7.5c0-.818-.393-1.544-1-2V13a3 3 0 0 1-3 3H4.5Z"
      />
    </svg>
  );
}
export default VideoClipMultiple;
