import type { SVGProps } from "react";

export function ImageTable(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm3-2a2 2 0 0 0-2 2h2V4Zm1 0v2h6V4H7Zm7 0v2h2a2 2 0 0 0-2-2Zm2 3h-2v6h2V7Zm0 7h-2v2a2 2 0 0 0 2-2Zm-3 2v-2H7v2h6Zm-7 0v-2H4a2 2 0 0 0 2 2Zm-2-3h2V7H4v6Zm3-6v6h.296l1.502-1.502a1.7 1.7 0 0 1 2.404 0L12.704 13H13V7H7Zm4.29 6l-.795-.795a.7.7 0 0 0-.99 0L8.71 13h2.58Z"
      />
    </svg>
  );
}
export default ImageTable;
