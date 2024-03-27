import type { SVGProps } from "react";

export function TableInsertColumn(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13Zm13 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM9 3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9Zm-1 9V8h4v4H8Zm4-7v2H8V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm-4 8h4v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
      />
    </svg>
  );
}
export default TableInsertColumn;
