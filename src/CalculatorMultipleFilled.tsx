import type { SVGProps } from "react";

export function CalculatorMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 12.5 2h-7ZM5 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5Zm0 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm4-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0 2.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2ZM11 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm-6 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2ZM7.5 18a2.496 2.496 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-9c.607.456 1 1.182 1 2v7a4.5 4.5 0 0 1-4.5 4.5h-5Z"
      />
    </svg>
  );
}
export default CalculatorMultipleFilled;
