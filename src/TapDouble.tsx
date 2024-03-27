import type { SVGProps } from "react";

export function TapDouble(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.5 3a5.5 5.5 0 0 0-5.044 7.695a3.934 3.934 0 0 0-.819.615a6.5 6.5 0 1 1 12.259-1.645a3.707 3.707 0 0 0-.929-.563A5.5 5.5 0 0 0 9.5 3Zm4.488 5.834a4.5 4.5 0 1 0-8.604 1.487a4.207 4.207 0 0 1 1.048-.135a3.5 3.5 0 1 1 6.564-1.526l.992.174ZM9.5 6A1.5 1.5 0 0 0 8 7.5v4.251c-.584-.197-1.243-.316-1.866-.248c-.458.05-.916.201-1.301.515c-.39.317-.67.77-.818 1.36a.5.5 0 0 0 .43.619c2.592.288 3.914 1.7 4.553 2.728c.48.772 1.41 1.407 2.435 1.229l1.517-.264a2.5 2.5 0 0 0 1.918-1.599l.983-2.67a2.5 2.5 0 0 0-1.914-3.327L11 9.58V7.5A1.5 1.5 0 0 0 9.5 6ZM9 7.5a.5.5 0 0 1 1 0V10a.5.5 0 0 0 .414.492l3.35.587a1.5 1.5 0 0 1 1.149 1.996l-.984 2.67a1.5 1.5 0 0 1-1.15.96l-1.517.264c-.502.087-1.077-.227-1.415-.772c-.7-1.128-2.094-2.62-4.649-3.098c.08-.128.17-.227.266-.305c.203-.165.464-.263.777-.297c.642-.07 1.419.142 2.035.45A.5.5 0 0 0 9 12.5v-5Z"
      />
    </svg>
  );
}
export default TapDouble;
