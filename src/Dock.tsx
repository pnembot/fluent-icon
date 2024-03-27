import type { SVGProps } from "react";

export function Dock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.354 3.146a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L9.5 4.707V12.5a.5.5 0 0 0 1 0V4.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3ZM3 10.5A1.5 1.5 0 0 1 4.5 9h3a.5.5 0 0 0 0-1h-3A2.5 2.5 0 0 0 2 10.5v3A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 15.5 8h-3a.5.5 0 0 0 0 1h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 13.5v-3Z"
      />
    </svg>
  );
}
export default Dock;
