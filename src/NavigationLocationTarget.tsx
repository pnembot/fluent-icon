import type { SVGProps } from "react";

export function NavigationLocationTarget(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 5a.5.5 0 0 0 0 1h10.195a4.474 4.474 0 0 1 1.323-.732a1.51 1.51 0 0 1 .068-.268H2.5Zm7.86 5.475a1.5 1.5 0 0 1-.274-.475H2.5a.5.5 0 0 0 0 1h8.775l-.007-.018a1.5 1.5 0 0 1-.908-.507Zm5.14.025a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm4-1.5h-.551A3.487 3.487 0 0 0 16 11.051V10.5a.5.5 0 0 0-1 0v.551A3.487 3.487 0 0 0 12.051 14H11.5a.5.5 0 0 0 0 1h.551A3.487 3.487 0 0 0 15 17.949v.551a.5.5 0 0 0 1 0v-.551A3.487 3.487 0 0 0 18.949 15h.551a.5.5 0 0 0 0-1Zm-2.232 2.268a2.5 2.5 0 1 1-3.536-3.535a2.5 2.5 0 0 1 3.536 3.535Z"
      />
    </svg>
  );
}
export default NavigationLocationTarget;
