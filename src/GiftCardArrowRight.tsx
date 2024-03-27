import type { SVGProps } from "react";

export function GiftCardArrowRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.75A2.75 2.75 0 0 1 4.75 2h10.5A2.75 2.75 0 0 1 18 4.75v5.507a5.503 5.503 0 0 0-1-.657V8H8.707l1.647 1.646a.5.5 0 0 1-.708.708L8 8.707V13h1.207a5.48 5.48 0 0 0-.185 1H4.75A2.75 2.75 0 0 1 2 11.25v-6.5ZM4.75 3A1.75 1.75 0 0 0 3 4.75V7h1.268A2 2 0 0 1 7 4.268V3H4.75ZM8 3v1.268A2 2 0 0 1 10.732 7H17V4.75A1.75 1.75 0 0 0 15.25 3H8Zm0 4h1a1 1 0 1 0-1-1v1ZM6 5a1 1 0 0 0 0 2h1V6a1 1 0 0 0-1-1ZM3 8v3.25c0 .966.784 1.75 1.75 1.75H7V8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 8H3Zm16 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.147.354l.003-.003a.499.499 0 0 0 .144-.348v-.006a.5.5 0 0 0-.146-.35l-2-2a.5.5 0 0 0-.708.707L15.293 14H12.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 0 0 .708.708l2-2Z"
      />
    </svg>
  );
}
export default GiftCardArrowRight;
