import type { SVGProps } from "react";

export function DualScreenTablet(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3v-1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H4V5Zm9 6h.5a.5.5 0 0 0 0-1H13v1ZM2 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9Zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.5V8H4Zm6 8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7.5v8H10Zm-1-2a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1H9Zm-5 .5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
}
export default DualScreenTablet;
