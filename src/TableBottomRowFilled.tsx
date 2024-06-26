import type { SVGProps } from "react";

export function TableBottomRowFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5V12h-1V5.5a1.5 1.5 0 0 0-1.355-1.493L14.5 4h-9a1.5 1.5 0 0 0-1.493 1.356L4 5.5V12H3V5.5A2.5 2.5 0 0 1 5.5 3h9ZM17 14.5a2.496 2.496 0 0 1-2.5 2.5H13v-4h4v1.5Zm-13 2c.418.314.937.5 1.5.5H7v-4H3v1.5c0 .818.393 1.544 1 2ZM8 13h4v4H8v-4Z"
      />
    </svg>
  );
}
export default TableBottomRowFilled;
