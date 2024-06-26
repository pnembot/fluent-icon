import type { SVGProps } from "react";

export function MegaphoneCircleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16ZM7 12.023l-1.171-.418A1.25 1.25 0 0 1 5 10.427v-.85c0-.529.332-1 .829-1.178l6.501-2.325a1.25 1.25 0 0 1 1.671 1.177v5.502a1.25 1.25 0 0 1-1.67 1.177l-1.379-.493A2 2 0 0 1 7 13v-.977Zm2.996 1.072A1 1 0 0 1 8 13v-.619l1.996.714Z"
      />
    </svg>
  );
}
export default MegaphoneCircleFilled;
