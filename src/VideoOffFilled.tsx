import type { SVGProps } from "react";

export function VideoOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.355 1.354A2.5 2.5 0 0 0 2 6.5v7A2.5 2.5 0 0 0 4.5 16h6a2.5 2.5 0 0 0 2.492-2.3l4.154 4.154a.5.5 0 0 0 .708-.708l-15-15Zm13.91 12.286l-1.41-1.199L14 11.88V7.93l2.77-2.314a.75.75 0 0 1 1.23.576v7.667a.75.75 0 0 1-1.236.572ZM13 10.879l-6.879-6.88H10.5A2.5 2.5 0 0 1 13 6.5v4.38Z"
      />
    </svg>
  );
}
export default VideoOffFilled;
