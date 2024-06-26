import type { SVGProps } from "react";

export function CopyArrowRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5.207A5.5 5.5 0 0 0 9.207 16H8a2 2 0 0 1-2-2V4Zm4.257 14a5.503 5.503 0 0 1-.657-1H7.5A2.5 2.5 0 0 1 5 14.5V4.268A2 2 0 0 0 4 6v8.5A3.5 3.5 0 0 0 7.5 18h2.757Zm4.243-8a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9Zm2.353 4.854l.003-.003a.499.499 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default CopyArrowRightFilled;
