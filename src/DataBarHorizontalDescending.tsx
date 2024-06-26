import type { SVGProps } from "react";

export function DataBarHorizontalDescending(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M13 5a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4h10ZM2 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm5 12a2 2 0 1 0 0-4H3a2 2 0 1 0 0 4h4Zm-5-2a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm9-5a2 2 0 0 1-2 2H3a2 2 0 1 1 0-4h6a2 2 0 0 1 2 2Zm-1 0a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1Z"
      />
    </svg>
  );
}
export default DataBarHorizontalDescending;
