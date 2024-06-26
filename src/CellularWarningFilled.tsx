import type { SVGProps } from "react";

export function CellularWarningFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.75 12a.75.75 0 0 1 .742.64l.008.11v2.5a.75.75 0 0 1-1.492.11L4 15.25v-2.5a.75.75 0 0 1 .75-.75Zm3-2a.75.75 0 0 1 .742.64l.008.11v4.5a.75.75 0 0 1-1.492.11L7 15.25v-4.5a.75.75 0 0 1 .75-.75Zm3-2a.75.75 0 0 1 .742.64l.008.11v3.786l-1.466 2.936a.746.746 0 0 1-.026-.111L10 15.25v-6.5a.75.75 0 0 1 .75-.75ZM13 9.676c.391-.45.945-.675 1.5-.676V6.75l-.008-.11A.75.75 0 0 0 13 6.75v2.926Zm3.293.43l1.196 2.394l.011-7.765l-.01-.11a.743.743 0 0 0-1.476.125l-.006 4.928c.108.125.205.268.285.428Zm-2.69.448l-3.496 6.998A1 1 0 0 0 11.002 19h6.996a1 1 0 0 0 .895-1.448l-3.5-6.999a1 1 0 0 0-1.79 0Zm1.395 1.941v3.003a.5.5 0 1 1-1 0v-3.003a.5.5 0 0 1 1 0Zm-.5 5.505a.5.5 0 1 1 0-1.001a.5.5 0 0 1 0 1Z"
      />
    </svg>
  );
}
export default CellularWarningFilled;
