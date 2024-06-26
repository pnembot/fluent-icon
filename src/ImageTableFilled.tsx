import type { SVGProps } from "react";

export function ImageTableFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3h3V3ZM3 7v6h3V7H3Zm4-1h6V3H7v3Zm7-3v3h3a3 3 0 0 0-3-3Zm3 4h-3v6h3V7Zm0 7h-3v3a3 3 0 0 0 3-3Zm-4 3v-3H7v3h6Zm-7 0v-3H3a3 3 0 0 0 3 3ZM7 7v6h.296l1.502-1.502a1.7 1.7 0 0 1 2.404 0L12.704 13H13V7H7Zm4 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm.29 5H8.71l.795-.795a.7.7 0 0 1 .99 0l.795.795Z"
      />
    </svg>
  );
}
export default ImageTableFilled;
