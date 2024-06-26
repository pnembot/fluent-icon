import type { SVGProps } from "react";

export function PuzzleCubePiece(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.208 1.29a1 1 0 0 0-1.414 0L14.29 2.793a1 1 0 0 0 0 1.414l1.503 1.503a1 1 0 0 0 1.414 0l1.503-1.503a1 1 0 0 0 0-1.414L17.208 1.29Zm-2.21 2.21l1.503-1.503L18.004 3.5L16.5 5.003L14.998 3.5Zm-2-.5H5.5A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V7h-4.002V3ZM5.356 15.993A1.5 1.5 0 0 1 4 14.5V13h3v3H5.5l-.144-.007ZM8 13h4v3H8v-3Zm7.993 1.644A1.5 1.5 0 0 1 14.5 16H13v-3h3v1.5l-.007.144ZM8 8h4v4H8V8Zm5 4V8h3v4h-3ZM8 4h4v3H8V4ZM5.5 4H7v3H4V5.5l.007-.145A1.5 1.5 0 0 1 5.5 4ZM4 12V8h3v4H4Z"
      />
    </svg>
  );
}
export default PuzzleCubePiece;
