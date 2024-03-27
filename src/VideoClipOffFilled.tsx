import type { SVGProps } from "react";

export function VideoClipOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l.739.738A2.495 2.495 0 0 0 2 5.5v9A2.5 2.5 0 0 0 4.5 17h11c.241 0 .474-.034.695-.098l.951.952a.5.5 0 0 0 .708-.708l-15-15Zm8.078 9.493l-2.156 1.428A.5.5 0 0 1 8 12.65V8.707l2.932 2.932Zm1.844-1.22l-.142.094l5.104 5.103A2.49 2.49 0 0 0 18 14.5v-9A2.5 2.5 0 0 0 15.5 3H5.121l4.797 4.797l2.847 1.78a.5.5 0 0 1 .011.841Z"
      />
    </svg>
  );
}
export default VideoClipOffFilled;
