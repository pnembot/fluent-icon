import type { SVGProps } from "react";

export function PlayCircleHintFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2c-.534 0-1.056.052-1.56.152a.5.5 0 0 0 .193.981a7.036 7.036 0 0 1 2.734 0a.5.5 0 0 0 .194-.98A8.038 8.038 0 0 0 10 2Zm4.445 1.348a.5.5 0 0 0-.556.83a7.042 7.042 0 0 1 1.932 1.933a.5.5 0 1 0 .831-.556a8.04 8.04 0 0 0-2.207-2.207Zm-8.334.83a.5.5 0 1 0-.556-.83a8.041 8.041 0 0 0-2.207 2.207a.5.5 0 1 0 .83.556a7.041 7.041 0 0 1 1.933-1.932ZM3.133 8.634a.5.5 0 0 0-.98-.194a8.037 8.037 0 0 0 0 3.122a.5.5 0 0 0 .98-.194a7.037 7.037 0 0 1 0-2.734Zm14.715-.194a.5.5 0 1 0-.981.194a7.042 7.042 0 0 1 0 2.734a.5.5 0 1 0 .98.194a8.033 8.033 0 0 0 0-3.122Zm-13.67 5.45a.5.5 0 1 0-.83.556a8.04 8.04 0 0 0 2.207 2.207a.5.5 0 1 0 .556-.83a7.042 7.042 0 0 1-1.932-1.933Zm12.474.556a.5.5 0 0 0-.83-.556a7.043 7.043 0 0 1-1.933 1.932a.5.5 0 1 0 .556.831a8.04 8.04 0 0 0 2.207-2.207Zm-8.019 2.422a.5.5 0 1 0-.194.98a8.032 8.032 0 0 0 3.122 0a.5.5 0 0 0-.194-.98a7.042 7.042 0 0 1-2.734 0ZM16 10a6 6 0 1 1-12 0a6 6 0 0 1 12 0ZM9.125 7.184A.75.75 0 0 0 8 7.834v4.333a.75.75 0 0 0 1.125.65l4.125-2.384a.5.5 0 0 0 0-.866L9.125 7.184Z"
      />
    </svg>
  );
}
export default PlayCircleHintFilled;
