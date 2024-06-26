import type { SVGProps } from "react";

export function TableEditFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18.453 13.191a1.87 1.87 0 0 0-2.644-2.644l-4.83 4.829a2.197 2.197 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.079l1.498-.375a2.197 2.197 0 0 0 1.02-.578l4.83-4.829Zm-3.35-3.351A2.86 2.86 0 0 1 17 9.002V8h-4v3.942l2.102-2.102Zm-4.83 4.829L11.943 13H8v4h1.221l.212-.846c.14-.562.43-1.076.84-1.485ZM12 12H8V8h4v4Zm-5 0V8H3v4h4Zm-4 1h4v4H5.5A2.5 2.5 0 0 1 3 14.5V13Zm10-6h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-1-4v4H8V3h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Z"
      />
    </svg>
  );
}
export default TableEditFilled;
