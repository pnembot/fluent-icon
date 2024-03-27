import type { SVGProps } from "react";

export function GiftCardArrowRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 2H4.75A2.75 2.75 0 0 0 2 4.75V7h2.268A2 2 0 0 1 7 4.268V2ZM2 8v3.25A2.75 2.75 0 0 0 4.75 14H7V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 8H2Zm6 6h1.022A5.5 5.5 0 0 1 18 10.257V8H8.707l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707V14Zm10-7h-7.268A2 2 0 0 0 8 4.268V2h7.25A2.75 2.75 0 0 1 18 4.75V7ZM8 7V6a1 1 0 1 1 1 1H8ZM7 7H6a1 1 0 1 1 1-1v1Zm12 7.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.147.354l.003-.003a.499.499 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default GiftCardArrowRightFilled;
