import type { SVGProps } from "react";

export function MoneyDismissFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 4A1.5 1.5 0 0 0 2 5.5v7A1.5 1.5 0 0 0 3.5 14h5.522A5.5 5.5 0 0 1 16 9.207V5.5A1.5 1.5 0 0 0 14.5 4h-11ZM6 6a2 2 0 0 1-2 2H3V7h1a1 1 0 0 0 1-1V5h1v1Zm3 4.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5ZM3 11v-1h1a2 2 0 0 1 2 2v1H5v-1a1 1 0 0 0-1-1H3Zm10-5a1 1 0 0 0 1 1h1v1h-1a2 2 0 0 1-2-2V5h1v1Zm-8.915 9h4.937a5.5 5.5 0 0 0 .185 1H5.5a1.5 1.5 0 0 1-1.415-1ZM18 7.5v2.757a5.509 5.509 0 0 0-1-.657V6.085A1.5 1.5 0 0 1 18 7.5Zm1 7a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-3.793 0l1.147-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5Z"
      />
    </svg>
  );
}
export default MoneyDismissFilled;
