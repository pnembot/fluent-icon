import type { SVGProps } from "react";

export function DocumentLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 2a2 2 0 0 0-2 2v7h1V4a1 1 0 0 1 1-1h4v3.5A1.5 1.5 0 0 0 11.5 8H15v8a1 1 0 0 1-1 1h-2.256a4.483 4.483 0 0 1-.502 1H14a2 2 0 0 0 2-2V7.414a1.5 1.5 0 0 0-.44-1.06l-3.914-3.915A1.5 1.5 0 0 0 10.586 2H6Zm8.793 5H11.5a.5.5 0 0 1-.5-.5V3.207L14.793 7ZM5 12.5a.5.5 0 0 0-.5-.5l-.192.005A3.5 3.5 0 0 0 4.5 19l.09-.008A.5.5 0 0 0 4.5 18l-.164-.005A2.5 2.5 0 0 1 4.5 13l.09-.008A.5.5 0 0 0 5 12.5Zm6 3A3.5 3.5 0 0 0 7.5 12l-.09.008A.5.5 0 0 0 7.5 13l.164.005A2.5 2.5 0 0 1 7.5 18l-.002.005l-.09.008a.5.5 0 0 0 .094.992V19l.192-.005A3.5 3.5 0 0 0 11 15.5Zm-3.5-.498L4.5 15l-.09.008A.5.5 0 0 0 4.5 16l3 .002l.09-.008a.5.5 0 0 0-.09-.992Z"
      />
    </svg>
  );
}
export default DocumentLink;
