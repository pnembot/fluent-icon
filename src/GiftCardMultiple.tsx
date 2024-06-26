import type { SVGProps } from "react";

export function GiftCardMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 4A2.75 2.75 0 0 0 2 6.75v5.5A2.75 2.75 0 0 0 4.75 15h8.5A2.75 2.75 0 0 0 16 12.25v-5.5A2.75 2.75 0 0 0 13.25 4h-8.5ZM3 12.25V10h3.293l-1.647 1.646a.5.5 0 0 0 .708.708L7 10.707V14H4.75A1.75 1.75 0 0 1 3 12.25ZM3 9V6.75C3 5.784 3.784 5 4.75 5H7v1.268A2 2 0 0 0 4.268 9H3Zm4 0H6a1 1 0 1 1 1-1v1Zm1 0V8a1 1 0 1 1 1 1H8Zm3-1a2 2 0 0 0-3-1.732V5h5.25c.966 0 1.75.784 1.75 1.75V9h-4.268A1.99 1.99 0 0 0 11 8Zm-.646 3.646L8.707 10H15v2.25A1.75 1.75 0 0 1 13.25 14H8v-3.293l1.646 1.647a.5.5 0 0 0 .708-.708ZM6.75 17c-.855 0-1.619-.39-2.123-1.002L4.75 16h8.5A3.75 3.75 0 0 0 17 12.25v-5.5c0-.041 0-.082-.002-.123A2.744 2.744 0 0 1 18 8.75v3.5A4.75 4.75 0 0 1 13.25 17h-6.5Z"
      />
    </svg>
  );
}
export default GiftCardMultiple;
