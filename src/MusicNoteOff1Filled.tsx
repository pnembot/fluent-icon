import type { SVGProps } from "react";

export function MusicNoteOff1Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L9.5 10.207v2.198a3.25 3.25 0 1 0 .995 2.165a.508.508 0 0 0 .005-.07v-3.293l6.646 6.647a.5.5 0 0 0 .708-.708l-15-15ZM10.5 7.177v1.202l-1-1V2.5a.5.5 0 0 1 .647-.478l5.088 1.566A2.5 2.5 0 0 1 17 5.978V8.5a.5.5 0 0 1-.647.478L10.5 7.177Z"
      />
    </svg>
  );
}
export default MusicNoteOff1Filled;
