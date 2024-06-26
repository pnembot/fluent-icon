import type { SVGProps } from "react";

export function TableCellEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8 13h1.985c.088-.117.184-.227.288-.331L12 10.942V7H8v6Zm7.102-5.16a2.88 2.88 0 0 1 .861-.593A1.991 1.991 0 0 0 15 7h-2v2.942l2.102-2.102ZM5 13a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2v6H5Zm10.809-4.453l-4.83 4.829a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.079l1.498-.375a2.197 2.197 0 0 0 1.02-.578l4.83-4.829a1.87 1.87 0 0 0-2.646-2.644Z"
      />
    </svg>
  );
}
export default TableCellEditFilled;
