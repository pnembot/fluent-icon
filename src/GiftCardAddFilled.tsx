import type { SVGProps } from "react";

export function GiftCardAddFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2H4.75A2.75 2.75 0 0 0 2 4.75V7h2.268A2 2 0 0 1 7 4.268V2ZM2 8v3.25A2.75 2.75 0 0 0 4.75 14H7V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 8H2Zm7.022 6H8V8.707l1.646 1.647a.5.5 0 0 0 .708-.708L8.707 8H18v2.257A5.5 5.5 0 0 0 9.022 14ZM18 7h-7.268A2 2 0 0 0 8 4.268V2h7.25A2.75 2.75 0 0 1 18 4.75V7ZM8 6v1h1a1 1 0 1 0-1-1ZM7 7H6a1 1 0 1 1 1-1v1Zm12 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15v-1.5Z"
      />
    </svg>
  );
}
export default GiftCardAddFilled;
