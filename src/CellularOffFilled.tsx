import type { SVGProps } from "react";

export function CellularOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L10 10.707v4.543l.008.11a.75.75 0 0 0 1.492-.11v-3.043l1.5 1.5v1.542l.008.11a.75.75 0 0 0 1.492-.11v-.042l2.646 2.647a.5.5 0 0 0 .708-.708l-15-15ZM13 10.88V6.75a.75.75 0 0 1 1.492-.11l.008.11v5.629l-1.5-1.5Zm4.479 4.479l-1.477-1.477l.012-9.131a.743.743 0 0 1 1.477-.124l.009.11l-.014 10.514a.758.758 0 0 1-.007.108Zm-11.987-2.72A.75.75 0 0 0 4 12.75v2.5l.008.11a.75.75 0 0 0 1.492-.11v-2.5l-.008-.11Zm3-2A.75.75 0 0 0 7 10.75v4.5l.008.11a.75.75 0 0 0 1.492-.11v-4.5l-.008-.11Z"
      />
    </svg>
  );
}
export default CellularOffFilled;
