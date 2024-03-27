import type { SVGProps } from "react";

export function GiftCardMoney(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.75A2.75 2.75 0 0 1 4.75 2h10.5A2.75 2.75 0 0 1 18 4.75V11h-1V8H8.707l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707V13h1.121a1.996 1.996 0 0 0-.121.687V14H4.75A2.75 2.75 0 0 1 2 11.25v-6.5ZM3 8v3.25c0 .966.784 1.75 1.75 1.75H7V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 8H3Zm1.268-1A2 2 0 0 1 7 4.268V3H4.75A1.75 1.75 0 0 0 3 4.75V7h1.268ZM6 7h1V6a1 1 0 1 0-1 1Zm2-1v1h1a1 1 0 1 0-1-1Zm2.732 1H17V4.75A1.75 1.75 0 0 0 15.25 3H8v1.268A2 2 0 0 1 10.732 7ZM19 13.5v3a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5Zm-1 3v-1a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5Zm-.5-3.5h-1a1.5 1.5 0 0 0 1.5 1.5v-1a.5.5 0 0 1-.5-.5Zm-6 0a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1Zm-.5 3.5a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  );
}
export default GiftCardMoney;
