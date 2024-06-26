import type { SVGProps } from "react";

export function TableBottomRow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3h9ZM4 13v1.5a1.5 1.5 0 0 0 1.356 1.493L5.5 16H7v-3H4Zm4 3h4v-3H8v3Zm5 0h1.5a1.5 1.5 0 0 0 1.493-1.355L16 14.5V13h-3v3Zm3-4V5.5a1.5 1.5 0 0 0-1.355-1.493L14.5 4h-9a1.5 1.5 0 0 0-1.493 1.356L4 5.5V12h12Z"
      />
    </svg>
  );
}
export default TableBottomRow;
