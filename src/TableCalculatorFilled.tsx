import type { SVGProps } from "react";

export function TableCalculatorFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 7h4V5.5A2.5 2.5 0 0 0 14.5 3H13v4Zm-6 5V8H3v4h4Zm5-3.5V8H8v4h3v-1.5c0-.818.393-1.544 1-2ZM11 13H8v4h3v-4Zm-4 0H3v1.5A2.5 2.5 0 0 0 5.5 17H7v-4Zm5-6V3H8v4h4ZM7 3v4H3V5.5A2.5 2.5 0 0 1 5.5 3H7Zm5 7.5A1.5 1.5 0 0 1 13.5 9h4a1.5 1.5 0 0 1 1.5 1.5v7a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-7Zm2.5 2.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM14.5 15h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM14.5 17h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1Zm3.5.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5ZM13.5 10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4Z"
      />
    </svg>
  );
}
export default TableCalculatorFilled;
