import type { SVGProps } from "react";

export function GiftCard(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25v-6.5ZM3 10v3.25c0 .966.784 1.75 1.75 1.75H7v-4.293l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 10H3Zm1.268-1A2 2 0 0 1 7 6.268V5H4.75A1.75 1.75 0 0 0 3 6.75V9h1.268ZM6 9h1V8a1 1 0 1 0-1 1Zm2-1v1h1a1 1 0 1 0-1-1Zm2.732 1H17V6.75A1.75 1.75 0 0 0 15.25 5H8v1.268A2 2 0 0 1 10.732 9Zm-2.025 1l1.647 1.646a.5.5 0 0 1-.708.708L8 10.707V15h7.25A1.75 1.75 0 0 0 17 13.25V10H8.707Z"
      />
    </svg>
  );
}
export default GiftCard;
