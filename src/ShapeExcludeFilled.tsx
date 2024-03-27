import type { SVGProps } from "react";

export function ShapeExcludeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 10.5v-6A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V7H9.5A2.5 2.5 0 0 0 7 9.5V13H4.5A2.5 2.5 0 0 1 2 10.5ZM7 13v2.5A2.5 2.5 0 0 0 9.5 18h6a2.5 2.5 0 0 0 2.5-2.5v-6A2.5 2.5 0 0 0 15.5 7H13v3.5a2.5 2.5 0 0 1-2.5 2.5H7Z"
      />
    </svg>
  );
}
export default ShapeExcludeFilled;
