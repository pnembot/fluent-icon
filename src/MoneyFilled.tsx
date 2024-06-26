import type { SVGProps } from "react";

export function MoneyFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 4A1.5 1.5 0 0 0 2 5.5v7A1.5 1.5 0 0 0 3.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 14.5 4h-11ZM6 5v1a2 2 0 0 1-2 2H3V7h1a1 1 0 0 0 1-1V5h1Zm3 5.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5ZM3 11v-1h1a2 2 0 0 1 2 2v1H5v-1a1 1 0 0 0-1-1H3Zm11 0a1 1 0 0 0-1 1v1h-1v-1a2 2 0 0 1 2-2h1v1h-1Zm0-4h1v1h-1a2 2 0 0 1-2-2V5h1v1a1 1 0 0 0 1 1Zm3 5.5a2.5 2.5 0 0 1-2.5 2.5H4.085A1.5 1.5 0 0 0 5.5 16h9a3.5 3.5 0 0 0 3.5-3.5v-5a1.5 1.5 0 0 0-1-1.415V12.5Z"
      />
    </svg>
  );
}
export default MoneyFilled;
