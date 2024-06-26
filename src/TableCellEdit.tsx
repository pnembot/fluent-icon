import type { SVGProps } from "react";

export function TableCellEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.985 13a3.22 3.22 0 0 1 .288-.331l.669-.669H8V8h4v2.942l1-1V8.001h1.942l.16-.161c.256-.256.549-.454.861-.593A1.99 1.99 0 0 0 15 7H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4.985ZM7 8v4H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2Zm8.809.547l-4.83 4.829a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.079l1.498-.375a2.197 2.197 0 0 0 1.02-.578l4.83-4.829a1.87 1.87 0 0 0-2.646-2.644Z"
      />
    </svg>
  );
}
export default TableCellEdit;
