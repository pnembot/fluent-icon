import type { SVGProps } from "react";

export function DesktopTowerFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2.085A1.5 1.5 0 0 1 7.5 16H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h3a2 2 0 0 0-2-2H4Zm3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v2H7.5a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1H14v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm6 12h-3v-2h3v2Z"
      />
    </svg>
  );
}
export default DesktopTowerFilled;
