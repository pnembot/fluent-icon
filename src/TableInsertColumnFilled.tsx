import type { SVGProps } from "react";

export function TableInsertColumnFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13Zm13 0a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0v-13ZM9 3a2 2 0 0 0-2 2v2h6V5a2 2 0 0 0-2-2H9Zm-2 9V8h6v4H7Zm0 1h6v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2Z"
      />
    </svg>
  );
}
export default TableInsertColumnFilled;
