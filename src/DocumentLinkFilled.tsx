import type { SVGProps } from "react";

export function DocumentLinkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5h-3.258A4.5 4.5 0 0 0 7.5 11H4V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM5 12.5a.5.5 0 0 0-.5-.5l-.192.005A3.5 3.5 0 0 0 4.5 19l.09-.008A.5.5 0 0 0 4.5 18l-.164-.005A2.5 2.5 0 0 1 4.5 13l.09-.008A.5.5 0 0 0 5 12.5Zm6 3A3.5 3.5 0 0 0 7.5 12l-.09.008A.5.5 0 0 0 7.5 13l.164.005A2.5 2.5 0 0 1 7.5 18l-.002.005l-.09.008a.5.5 0 0 0 .094.992V19l.192-.005A3.5 3.5 0 0 0 11 15.5Zm-3.5-.498L4.5 15l-.09.008A.5.5 0 0 0 4.5 16l3 .002l.09-.008a.5.5 0 0 0-.09-.992Z"
      />
    </svg>
  );
}
export default DocumentLinkFilled;
