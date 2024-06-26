import type { SVGProps } from "react";

export function MusicNoteOff2Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L7 7.707V13.5a2.5 2.5 0 1 0 1 2V8.707l3.414 3.414a2.5 2.5 0 0 0 3.465 3.465l2.267 2.268a.5.5 0 0 0 .708-.708l-15-15ZM13.5 11c-.12 0-.238.008-.354.025l2.83 2.829c.015-.116.024-.234.024-.354V3.18a1 1 0 0 0-1.298-.955l-7 2.188a1 1 0 0 0-.617.55l2.811 2.812L15 6.18v5.32a2.49 2.49 0 0 0-1.5-.5Z"
      />
    </svg>
  );
}
export default MusicNoteOff2Filled;
