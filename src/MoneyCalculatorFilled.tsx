import type { SVGProps } from "react";

export function MoneyCalculatorFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 4.5A1.5 1.5 0 0 1 3.5 3h11A1.5 1.5 0 0 1 16 4.5V8h-3a2 2 0 0 0-2 2v3H3.5A1.5 1.5 0 0 1 2 11.5v-7ZM4 7a2 2 0 0 0 2-2V4H5v1a1 1 0 0 1-1 1H3v1h1Zm3.25 1a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0ZM3 9v1h1a1 1 0 0 1 1 1v1h1v-1a2 2 0 0 0-2-2H3Zm12-2V6h-1a1 1 0 0 1-1-1V4h-1v1a2 2 0 0 0 2 2h1Zm2 1V5.085A1.5 1.5 0 0 1 18 6.5V8h-1Zm-6 6v1H5.5a1.5 1.5 0 0 1-1.415-1H11Zm2.5-5a1.5 1.5 0 0 0-1.5 1.5v7a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 17.5 9h-4Zm0 4h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm-3 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm-3 2h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1Zm3 0h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1ZM13 10.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1Z"
      />
    </svg>
  );
}
export default MoneyCalculatorFilled;
