import type { SVGProps } from "react";

export function CalculatorMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6Zm0 1h6v2H6V5Zm2 5a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM11 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM5 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0Zm1 1.75a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM5.5 2A2.5 2.5 0 0 0 3 4.5v9A2.5 2.5 0 0 0 5.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 12.5 2h-7ZM4 4.5A1.5 1.5 0 0 1 5.5 3h7A1.5 1.5 0 0 1 14 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 4 13.5v-9ZM7.5 18a2.496 2.496 0 0 1-2-1h7a3.5 3.5 0 0 0 3.5-3.5v-9c.607.456 1 1.182 1 2v7a4.5 4.5 0 0 1-4.5 4.5h-5Z"
      />
    </svg>
  );
}
export default CalculatorMultiple;
