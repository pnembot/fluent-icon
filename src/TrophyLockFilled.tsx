import type { SVGProps } from "react";

export function TrophyLockFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 4a2 2 0 0 1 2-1.998h5A2 2 0 0 1 14.5 4h.996a1.5 1.5 0 0 1 1.5 1.5v1.505c0 .448-.098.873-.274 1.254a2.983 2.983 0 0 0-.996-.25c.172-.295.27-.638.27-1.004V5.5a.5.5 0 0 0-.5-.5h-.995v3.17A3.001 3.001 0 0 0 12.5 11v.063A2 2 0 0 0 11 13v.389a4.48 4.48 0 0 1-.5.084v1.495h.5V17c0 .351.09.681.25.968H6.004a.5.5 0 0 1-.5-.5v-.5a2 2 0 0 1 2-2h1.997v-1.495a4.503 4.503 0 0 1-3.895-3.501a3.006 3.006 0 0 1-2.61-2.974V5.5a1.5 1.5 0 0 1 1.5-1.5h1.005Zm0 1H4.497a.5.5 0 0 0-.5.5v1.498c0 .93.64 1.713 1.505 1.936V5Zm8 6v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default TrophyLockFilled;
