import type { SVGProps } from "react";

export function MusicNoteOff1(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L9.5 10.207v2.198a3.25 3.25 0 1 0 .995 2.165a.508.508 0 0 0 .005-.07v-3.293l6.646 6.647a.5.5 0 0 0 .708-.708l-15-15ZM5 14.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Zm5.5-7.573v1.202l-1-1V2.5a.5.5 0 0 1 .647-.478l5.088 1.566A2.5 2.5 0 0 1 17 5.978V8.5a.5.5 0 0 1-.647.478L10.5 7.177Zm5.5.646V5.977a1.5 1.5 0 0 0-1.059-1.434L10.5 3.177v2.954L16 7.823Z"
      />
    </svg>
  );
}
export default MusicNoteOff1;
