import type { SVGProps } from "react";

export function TapSingleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 8.5a3.5 3.5 0 1 1 6.996.16l.992.174a4.5 4.5 0 1 0-8.604 1.487a4.207 4.207 0 0 1 1.048-.135A3.485 3.485 0 0 1 6 8.5ZM9.5 6A1.5 1.5 0 0 0 8 7.5v4.251c-.584-.197-1.243-.316-1.866-.248c-.458.05-.916.201-1.301.515c-.39.317-.67.77-.818 1.36a.5.5 0 0 0 .43.619c2.592.288 3.914 1.7 4.553 2.728c.48.772 1.41 1.407 2.435 1.229l1.517-.264a2.5 2.5 0 0 0 1.918-1.599l.983-2.67a2.5 2.5 0 0 0-1.914-3.327L11 9.58V7.5A1.5 1.5 0 0 0 9.5 6Z"
      />
    </svg>
  );
}
export default TapSingleFilled;
