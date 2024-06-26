import type { SVGProps } from "react";

export function TableMultiple(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.672 17h7.834a3.489 3.489 0 0 0 2.458-1.014l.011-.011l.012-.011A3.489 3.489 0 0 0 17 13.5V5.671c.626.773 1 1.757 1 2.83v5a4.5 4.5 0 0 1-4.5 4.5h-5a4.481 4.481 0 0 1-2.828-1Zm9.596-14.268A2.5 2.5 0 0 1 16 4.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 2 13.5v-9A2.5 2.5 0 0 1 4.5 2h9a2.5 2.5 0 0 1 1.768.732ZM4.5 3l-.144.007A1.5 1.5 0 0 0 3 4.5V6h3V3H4.5ZM11 3H7v3h4V3Zm4 1.5l-.007-.144A1.5 1.5 0 0 0 13.5 3H12v3h3V4.5ZM7 7v4h4V7H7Zm8 0h-3v4h3V7Zm-8 5v3h4v-3H7Zm8 0h-3v3h1.5l.144-.007A1.5 1.5 0 0 0 15 13.5V12ZM3.492 14.61A1.5 1.5 0 0 0 4.5 15H6v-3H3v1.5l.007.144a1.5 1.5 0 0 0 .485.966ZM3 7v4h3V7H3Z"
      />
    </svg>
  );
}
export default TableMultiple;
