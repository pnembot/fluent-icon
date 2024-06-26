import type { SVGProps } from "react";

export function ProhibitedMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9 2a7 7 0 1 1 0 14A7 7 0 0 1 9 2Zm3.323 2.617a5.5 5.5 0 0 0-7.706 7.706l7.706-7.706Zm1.06 1.06l-7.706 7.706a5.5 5.5 0 0 0 7.706-7.706ZM9 17a8 8 0 0 0 7.75-9.994a7 7 0 0 1-9.744 9.743A7.953 7.953 0 0 0 9 17Z"
      />
    </svg>
  );
}
export default ProhibitedMultipleFilled;
