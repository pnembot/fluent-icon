import type { SVGProps } from "react";

export function FullScreenMinimize(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 5a1 1 0 0 0 1 1h2a.5.5 0 0 1 0 1h-2a2 2 0 0 1-2-2V3a.5.5 0 0 1 1 0v2ZM6 15a1 1 0 0 0-1-1H3a.5.5 0 0 1 0-1h2a2 2 0 0 1 2 2v2a.5.5 0 0 1-1 0v-2Zm8 0a1 1 0 0 1 1-1h2a.5.5 0 0 0 0-1h-2a2 2 0 0 0-2 2v2a.5.5 0 0 0 1 0v-2ZM5 6a1 1 0 0 0 1-1V3a.5.5 0 0 1 1 0v2a2 2 0 0 1-2 2H3a.5.5 0 0 1 0-1h2Z"
      />
    </svg>
  );
}
export default FullScreenMinimize;
