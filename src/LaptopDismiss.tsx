import type { SVGProps } from "react";

export function LaptopDismiss(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.978 6H15a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1.207a5.466 5.466 0 0 1-1-.393V12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4.022a5.585 5.585 0 0 1 0 1ZM2.5 15a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm3-5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm1.854-6.354a.5.5 0 0 1 0 .708L6.207 5.5l1.147 1.146a.5.5 0 1 1-.708.708L5.5 6.207L4.354 7.354a.5.5 0 1 1-.708-.708L4.793 5.5L3.646 4.354a.5.5 0 1 1 .708-.708L5.5 4.793l1.146-1.147a.5.5 0 0 1 .708 0Z"
      />
    </svg>
  );
}
export default LaptopDismiss;
