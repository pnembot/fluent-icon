import type { SVGProps } from "react";

export function StarThreeQuarter(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m10.898 2.9l1.93 3.91l4.317.628a1 1 0 0 1 .554 1.706l-3.124 3.044l.738 4.3a1 1 0 0 1-1.451 1.054l-3.86-2.03l-3.862 2.03a1 1 0 0 1-1.45-1.055l.737-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627l1.93-3.912a1 1 0 0 1 1.794 0Zm1.104 4.474v8.06l2.325 1.223l-.737-4.3a1 1 0 0 1 .287-.885l3.124-3.044l-4.317-.628a1 1 0 0 1-.682-.426Z"
      />
    </svg>
  );
}
export default StarThreeQuarter;
