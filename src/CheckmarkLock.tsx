import type { SVGProps } from "react";

export function CheckmarkLock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 0 1 7.993 8.331a3.016 3.016 0 0 0-1.02-.945A7 7 0 1 0 11 16.93v1.01A8 8 0 1 1 10 2Zm6.97 8.645c.33.356.53.832.53 1.355v1h.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h.5v-1a2 2 0 0 1 3.47-1.355ZM14.5 13h2v-1a1 1 0 1 0-2 0v1Zm.345 3.366a.75.75 0 1 0 1.31-.732a.75.75 0 0 0-1.31.732Zm-1.487-8.72a.5.5 0 0 1 .058.638l-.058.07l-4.004 4.004a.5.5 0 0 1-.638.058l-.07-.058l-2-2a.5.5 0 0 1 .638-.765l.07.058L9 11.298l3.651-3.652a.5.5 0 0 1 .707 0Z"
      />
    </svg>
  );
}
export default CheckmarkLock;
