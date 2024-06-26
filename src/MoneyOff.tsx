import type { SVGProps } from "react";

export function MoneyOff(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.16 1.159A1.5 1.5 0 0 0 2 5.5v7A1.5 1.5 0 0 0 3.5 14h9.793l1 1H4.085A1.5 1.5 0 0 0 5.5 16h9c.246 0 .487-.025.719-.074l1.927 1.928a.5.5 0 0 0 .708-.708l-15-15ZM12 12.707V13H6v-1a2 2 0 0 0-2-2H3V8h1a2 2 0 0 0 1.905-1.388l1.372 1.372a2 2 0 0 0 2.74 2.74L12 12.707ZM4.293 5L5 5.707V6a1 1 0 0 1-1 1H3V5.5a.5.5 0 0 1 .5-.5h.793Zm3.74 3.741L9.26 9.966a1.001 1.001 0 0 1-1.225-1.225ZM3.5 13a.5.5 0 0 1-.5-.5V11h1a1 1 0 0 1 1 1v1H3.5ZM14 10c-.523 0-.998.2-1.354.528l.708.709A.996.996 0 0 1 14 11h1v1.5a.498.498 0 0 1-.093.29l.71.71c.238-.265.383-.616.383-1v-7A1.5 1.5 0 0 0 14.5 4H6.117l1 1H12v1a2 2 0 0 0 2 2h1v2h-1Zm.5-5a.5.5 0 0 1 .5.5V7h-1a1 1 0 0 1-1-1V5h1.5Zm1.826 9.208l.707.708c.6-.629.967-1.48.967-2.416v-5a1.5 1.5 0 0 0-1-1.415V12.5c0 .66-.256 1.261-.674 1.708Z"
      />
    </svg>
  );
}
export default MoneyOff;
