import type { SVGProps } from "react";

export function ReceiptMoneyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3h-4.05c.033-.162.05-.329.05-.5v-3A2.5 2.5 0 0 0 8.5 11H4V5Zm11 11a2 2 0 0 0 2-2v-1h-2v3ZM7.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Zm2.5 4.5A1.5 1.5 0 0 0 8.5 12h-6A1.5 1.5 0 0 0 1 13.5v3A1.5 1.5 0 0 0 2.5 18h6a1.5 1.5 0 0 0 1.5-1.5v-3Zm-1 2v1a.5.5 0 0 0-.5.5h-1A1.5 1.5 0 0 1 9 15.5ZM8.5 13a.5.5 0 0 0 .5.5v1A1.5 1.5 0 0 1 7.5 13h1Zm-6.5.5a.5.5 0 0 0 .5-.5h1A1.5 1.5 0 0 1 2 14.5v-1Zm.5 3.5a.5.5 0 0 0-.5-.5v-1A1.5 1.5 0 0 1 3.5 17h-1ZM4 15a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0Z"
      />
    </svg>
  );
}
export default ReceiptMoneyFilled;
