import type { SVGProps } from "react";

export function ScanCameraFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 6.25A3.25 3.25 0 0 1 6.25 3h1.346a.75.75 0 1 1 0 1.5H6.25A1.75 1.75 0 0 0 4.5 6.25v1.346a.75.75 0 1 1-1.5 0V6.25Zm8.654-2.5a.75.75 0 0 1 .75-.75h1.346A3.25 3.25 0 0 1 17 6.25v1.346a.75.75 0 0 1-1.5 0V6.25a1.75 1.75 0 0 0-1.75-1.75h-1.346a.75.75 0 0 1-.75-.75ZM3.75 11.654a.75.75 0 0 1 .75.75v1.346c0 .966.784 1.75 1.75 1.75h1.346a.75.75 0 0 1 0 1.5H6.25A3.25 3.25 0 0 1 3 13.75v-1.346a.75.75 0 0 1 .75-.75Zm12.5 0a.75.75 0 0 1 .75.75v1.346A3.25 3.25 0 0 1 13.75 17h-1.346a.75.75 0 0 1 0-1.5h1.346a1.75 1.75 0 0 0 1.75-1.75v-1.346a.75.75 0 0 1 .75-.75ZM10 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-4 1V9a1 1 0 0 1 1-1h1l.703-1.055a1 1 0 0 1 .832-.445h.93a1 1 0 0 1 .832.445L12 8h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Zm6-2a2 2 0 1 0-4 0a2 2 0 0 0 4 0Z"
      />
    </svg>
  );
}
export default ScanCameraFilled;
