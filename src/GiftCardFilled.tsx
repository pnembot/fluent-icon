import type { SVGProps } from "react";

export function GiftCardFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 4H4.75A2.75 2.75 0 0 0 2 6.75V9h2.268A2 2 0 0 1 7 6.268V4Zm1 4v1h1a1 1 0 1 0-1-1Zm2.732 1A2 2 0 0 0 8 6.268V4h7.25A2.75 2.75 0 0 1 18 6.75V9h-7.268Zm-2.025 1l1.647 1.646a.5.5 0 0 1-.708.708L8 10.707V16h7.25A2.75 2.75 0 0 0 18 13.25V10H8.707ZM7 16v-5.293l-1.646 1.647a.5.5 0 0 1-.708-.708L6.293 10H2v3.25A2.75 2.75 0 0 0 4.75 16H7Zm0-8a1 1 0 1 0-1 1h1V8Z"
      />
    </svg>
  );
}
export default GiftCardFilled;
