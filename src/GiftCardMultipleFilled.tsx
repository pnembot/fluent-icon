import type { SVGProps } from "react";

export function GiftCardMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 4H7v2.268A2 2 0 0 0 4.268 9H2V6.75A2.75 2.75 0 0 1 4.75 4ZM2 12.25V10h4.293l-1.647 1.646a.5.5 0 0 0 .708.708L7 10.707V15H4.75A2.75 2.75 0 0 1 2 12.25ZM8 15h5.25A2.75 2.75 0 0 0 16 12.25V10H8.707l1.647 1.646a.5.5 0 0 1-.708.708L8 10.707V15Zm2.732-6H16V6.75A2.75 2.75 0 0 0 13.25 4H8v2.268A2 2 0 0 1 10.732 9ZM8 9V8a1 1 0 1 1 1 1H8ZM6 9h1V8a1 1 0 1 0-1 1Zm.75 8c-.855 0-1.619-.39-2.123-1.002L4.75 16h8.5A3.75 3.75 0 0 0 17 12.25v-5.5c0-.041 0-.082-.002-.123A2.744 2.744 0 0 1 18 8.75v3.5A4.75 4.75 0 0 1 13.25 17h-6.5Z"
      />
    </svg>
  );
}
export default GiftCardMultipleFilled;
