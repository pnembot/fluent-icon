import type { SVGProps } from "react";

export function RibbonOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.625 5.332a6 6 0 0 0 8.044 8.044l.74.74A6.967 6.967 0 0 1 10 15a6.968 6.968 0 0 1-4-1.255V17.5a.5.5 0 0 0 .79.407L10 16l3.21 1.907A.5.5 0 0 0 14 17.5v-2.793l3.146 3.147a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708l2.479 2.478Zm1.193-1.635l8.485 8.485a6 6 0 0 0-8.484-8.484Z"
      />
    </svg>
  );
}
export default RibbonOffFilled;
