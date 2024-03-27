import type { SVGProps } from "react";

export function ArrowTurnLeftRightFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.53 15.447a.75.75 0 0 0 .392-1.031l-2.5-5.001a.75.75 0 1 0-1.342.67l1.62 3.245l-9.817-4.32l10.663-4.57a.75.75 0 1 0-.59-1.378L2.762 7.857c-1.004.431-1.011 1.853-.01 2.293l10.466 4.606l-3.247 1.298a.75.75 0 1 0 .557 1.392l5-1.999Z"
      />
    </svg>
  );
}
export default ArrowTurnLeftRightFilled;
