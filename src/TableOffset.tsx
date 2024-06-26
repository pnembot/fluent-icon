import type { SVGProps } from "react";

export function TableOffset(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3h-9ZM16 12H8V8h8v4Zm-3 1h3v1.5a1.5 1.5 0 0 1-1.5 1.5H13v-3Zm-1 0v3H5.5A1.5 1.5 0 0 1 4 14.5V13h8Zm-8-1V8h3v4H4Zm0-5V5.5A1.5 1.5 0 0 1 5.5 4H12v3H4Zm12-1.5V7h-3V4h1.5A1.5 1.5 0 0 1 16 5.5Z"
      />
    </svg>
  );
}
export default TableOffset;
