import type { SVGProps } from "react";

export function MusicNote1(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.147 2.022A.5.5 0 0 0 9.5 2.5v9.905a3.25 3.25 0 1 0 .995 2.165a.508.508 0 0 0 .005-.07V7.177l5.853 1.8A.5.5 0 0 0 17 8.5V5.977a2.5 2.5 0 0 0-1.765-2.39l-5.088-1.565ZM16 7.823l-5.5-1.692V3.177l4.441 1.366A1.5 1.5 0 0 1 16 5.977v1.846ZM5 14.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0Z"
      />
    </svg>
  );
}
export default MusicNote1;
