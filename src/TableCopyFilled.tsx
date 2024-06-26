import type { SVGProps } from "react";

export function TableCopyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 13.5A3.5 3.5 0 0 0 6.5 17h7.829c-.773.625-1.757 1-2.829 1h-5A4.5 4.5 0 0 1 2 13.5v-5c0-1.072.375-2.056 1-2.829v7.83ZM15.5 16H14v-4h4v1.5a2.5 2.5 0 0 1-2.5 2.5ZM14 7v4h4V7h-4Zm-5 4h4V7H9v4Zm4 1H9v4h4v-4ZM8 7v4H4V7h4Zm0 5H4v1.5A2.5 2.5 0 0 0 6.5 16H8v-4Zm10-6h-4V2h1.5A2.5 2.5 0 0 1 18 4.5V6Zm-5 0V2H9v4h4ZM8 6V2H6.5A2.5 2.5 0 0 0 4 4.5V6h4Z"
      />
    </svg>
  );
}
export default TableCopyFilled;
