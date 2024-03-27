import type { SVGProps } from "react";

export function DualScreenDesktopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v2h1a.5.5 0 0 1 0 1h-2v-6a3 3 0 0 0-3-3H4V4Zm6 14H7.5V8H10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2ZM4 8h2.5v10H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2Zm5.5 7a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1h-.5Zm-6 .5a.5.5 0 0 0 .5.5h.5a.5.5 0 0 0 0-1H4a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default DualScreenDesktopFilled;
