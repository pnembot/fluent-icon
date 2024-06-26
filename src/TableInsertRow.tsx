import type { SVGProps } from "react";

export function TableInsertRow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13Zm0-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2Zm9 1H8V8h4v4ZM5 8h2v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8 4V8h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2Z"
      />
    </svg>
  );
}
export default TableInsertRow;
