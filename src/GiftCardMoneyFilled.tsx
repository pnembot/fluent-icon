import type { SVGProps } from "react";

export function GiftCardMoneyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2H4.75A2.75 2.75 0 0 0 2 4.75V7h2.268A2 2 0 0 1 7 4.268V2Zm1 4v1h1a1 1 0 1 0-1-1Zm2.732 1A2 2 0 0 0 8 4.268V2h7.25A2.75 2.75 0 0 1 18 4.75V7h-7.268ZM8.707 8l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707V14h1v-.5a2.5 2.5 0 0 1 2.5-2.5h6c.171 0 .338.017.5.05V8H8.707ZM7 14V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 8H2v3.25A2.75 2.75 0 0 0 4.75 14H7Zm0-8a1 1 0 1 0-1 1h1V6Zm12 7.5v3a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-3a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5Zm-1 3v-1a1.5 1.5 0 0 0-1.5 1.5h1a.5.5 0 0 1 .5-.5Zm-.5-3.5h-1a1.5 1.5 0 0 0 1.5 1.5v-1a.5.5 0 0 1-.5-.5Zm-6 0a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1Zm-.5 3.5a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5v1Zm3.5-3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3Z"
      />
    </svg>
  );
}
export default GiftCardMoneyFilled;
