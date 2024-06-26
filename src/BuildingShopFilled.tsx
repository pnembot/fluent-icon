import type { SVGProps } from "react";

export function BuildingShopFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M12 12h2v2h-2v-2ZM5 2h10a.5.5 0 0 1 .384.18l2.5 3c.117.14.116.211.116.302V7c0 .888-.386 1.687-1 2.236V17.5a.5.5 0 0 1-.5.5H10v-6.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V18H3.5a.5.5 0 0 1-.5-.5V9.236C2.386 8.686 2 7.888 2 7V5.5a.5.5 0 0 1 .116-.32l2.5-3A.5.5 0 0 1 5 2ZM3 6v1a2 2 0 1 0 4 0V6H3Zm5 0v1a2 2 0 1 0 4 0V6H8Zm5 0v1a2 2 0 1 0 4 0V6h-4ZM5.234 3L3.568 5H7.14l.666-2H5.234Zm6.572 2l-.666-2H8.86l-.666 2h3.612Zm1.054 0h3.573l-1.667-2h-2.572l.666 2ZM11 11.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM9 18v-6H6v6h3Z"
      />
    </svg>
  );
}
export default BuildingShopFilled;
