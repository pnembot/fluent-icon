import type { SVGProps } from "react";

export function DataBarVerticalAscending(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 3a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0V3Zm2 11a1 1 0 0 0 1-1V3a1 1 0 1 0-2 0v10a1 1 0 0 0 1 1ZM1 9a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0V9Zm2 5a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1Zm5-9a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V7a2 2 0 0 0-2-2Zm0 1a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
}
export default DataBarVerticalAscending;
