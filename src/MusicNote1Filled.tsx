import type { SVGProps } from "react";

export function MusicNote1Filled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.147 2.022A.5.5 0 0 0 9.5 2.5v9.905a3.25 3.25 0 1 0 .995 2.165a.508.508 0 0 0 .005-.07V7.177l5.853 1.8A.5.5 0 0 0 17 8.5V5.977a2.5 2.5 0 0 0-1.765-2.39l-5.088-1.565Z"
      />
    </svg>
  );
}
export default MusicNote1Filled;
