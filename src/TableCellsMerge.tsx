import type { SVGProps } from "react";

export function TableCellsMerge(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.354 8.854a.5.5 0 1 0-.708-.708l-1.5 1.5a.5.5 0 0 0 0 .708l1.5 1.5a.5.5 0 0 0 .708-.708l-.647-.646h6.586l-.647.646a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708l-1.5-1.5a.5.5 0 0 0-.708.708l.647.646H6.707l.647-.646ZM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM4 7h12v6H4V7Zm10 9H6a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2Zm2-10H4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z"
      />
    </svg>
  );
}
export default TableCellsMerge;
