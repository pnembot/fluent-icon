import type { SVGProps } from "react";

export function MoneyDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 9a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2ZM3.5 4A1.5 1.5 0 0 0 2 5.5v7A1.5 1.5 0 0 0 3.5 14h5.522a5.48 5.48 0 0 1 .185-1H6v-1a2 2 0 0 0-2-2H3V8h1a2 2 0 0 0 2-2V5h6v1a2 2 0 0 0 2 2h1v1.022a5.5 5.5 0 0 1 1 .185V5.5A1.5 1.5 0 0 0 14.5 4h-11ZM3 5.5a.5.5 0 0 1 .5-.5H5v1a1 1 0 0 1-1 1H3V5.5ZM13 5h1.5a.5.5 0 0 1 .5.5V7h-1a1 1 0 0 1-1-1V5Zm-8 8H3.5a.5.5 0 0 1-.5-.5V11h1a1 1 0 0 1 1 1v1Zm-.915 2h4.937a5.5 5.5 0 0 0 .185 1H5.5a1.5 1.5 0 0 1-1.415-1ZM18 7.5v2.757a5.508 5.508 0 0 0-1-.657V6.085A1.5 1.5 0 0 1 18 7.5Zm1 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-3.793 0l1.147-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5Z"
      />
    </svg>
  );
}
export default MoneyDismiss;
