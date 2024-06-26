import type { SVGProps } from "react";

export function ClipboardLinkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.085 3A1.5 1.5 0 0 1 8.5 2h3a1.5 1.5 0 0 1 1.415 1H14.5A1.5 1.5 0 0 1 16 4.5V11h-3.5a4.5 4.5 0 0 0-3.742 7H5.5A1.5 1.5 0 0 1 4 16.5v-12A1.5 1.5 0 0 1 5.5 3h1.585ZM8.5 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3ZM19 15.5a3.5 3.5 0 0 0-3.5-3.5l-.09.008a.5.5 0 0 0 .09.992l.164.005A2.5 2.5 0 0 1 15.5 18l-.002.005l-.09.008a.5.5 0 0 0 .094.992V19l.192-.005A3.5 3.5 0 0 0 19 15.5Zm-6-3a.5.5 0 0 0-.5-.5l-.192.005A3.5 3.5 0 0 0 12.5 19l.09-.008A.5.5 0 0 0 12.5 18l-.164-.005A2.5 2.5 0 0 1 12.5 13l.09-.008A.5.5 0 0 0 13 12.5Zm2.5 2.502l-3-.002l-.09.008a.5.5 0 0 0 .09.992l3 .002l.09-.008a.5.5 0 0 0-.09-.992Z"
      />
    </svg>
  );
}
export default ClipboardLinkFilled;
