import type { SVGProps } from "react";

export function TrophyLock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.996 6.998a3.006 3.006 0 0 0 2.61 2.974a4.503 4.503 0 0 0 3.895 3.5v1.496H7.504a2 2 0 0 0-2 2v.5a.5.5 0 0 0 .5.5h5.246A1.99 1.99 0 0 1 11 17v-.032H6.504a1 1 0 0 1 1-1H11v-1h-.5v-1.495c.17-.02.337-.047.5-.084V13c0-.24.042-.47.12-.683a3.5 3.5 0 0 1-4.615-3.161V4H6.5a1 1 0 0 1 1-.998h5a1 1 0 0 1 1 1v4.761a2.998 2.998 0 0 1 1-.593V5h.995a.5.5 0 0 1 .5.5v1.505c0 .366-.098.709-.27 1.003c.352.027.687.114.996.251c.176-.381.274-.806.274-1.254V5.5a1.5 1.5 0 0 0-1.5-1.5H14.5a2 2 0 0 0-2-1.998h-5A2 2 0 0 0 5.5 4H4.496a1.5 1.5 0 0 0-1.5 1.5v1.498ZM4.496 5h1.005v3.934a2.006 2.006 0 0 1-1.505-1.936V5.5a.5.5 0 0 1 .5-.5Zm9.004 6v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default TrophyLock;
