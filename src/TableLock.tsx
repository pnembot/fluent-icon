import type { SVGProps } from "react";

export function TableLock(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17H11v-1H8v-3h3.268a2.004 2.004 0 0 1 1.232-.937V12c0-.613.184-1.184.5-1.659V8h3v1.041c.359.06.696.185 1 .36V5.5Zm-13 9V13h3v3H5.5l-.144-.007A1.5 1.5 0 0 1 4 14.5ZM12 8v4H8V8h4Zm0-1H8V4h4v3Zm1-3h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm6.5 4v1H13a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-1a2 2 0 1 0-4 0Zm1 1v-1a1 1 0 1 1 2 0v1h-2Zm1 2.25a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}
export default TableLock;
