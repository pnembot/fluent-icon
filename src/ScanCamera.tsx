import type { SVGProps } from "react";

export function ScanCamera(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6a3 3 0 0 1 3-3h1.5a.5.5 0 0 1 0 1H6a2 2 0 0 0-2 2v1.5a.5.5 0 0 1-1 0V6Zm9-2.5a.5.5 0 0 1 .5-.5H14a3 3 0 0 1 3 3v1.5a.5.5 0 0 1-1 0V6a2 2 0 0 0-2-2h-1.5a.5.5 0 0 1-.5-.5ZM3.5 12a.5.5 0 0 1 .5.5V14a2 2 0 0 0 2 2h1.5a.5.5 0 0 1 0 1H6a3 3 0 0 1-3-3v-1.5a.5.5 0 0 1 .5-.5Zm13 0a.5.5 0 0 1 .5.5V14a3 3 0 0 1-3 3h-1.5a.5.5 0 0 1 0-1H14a2 2 0 0 0 2-2v-1.5a.5.5 0 0 1 .5-.5ZM10 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4 1V9a1 1 0 0 1 1-1h1l.703-1.055a1 1 0 0 1 .832-.445h.93a1 1 0 0 1 .832.445L12 8h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Zm6-2a2 2 0 1 0-4 0a2 2 0 0 0 4 0Z"
      />
    </svg>
  );
}
export default ScanCamera;
