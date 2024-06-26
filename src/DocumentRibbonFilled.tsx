import type { SVGProps } from "react";

export function DocumentRibbonFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2v4.5A1.5 1.5 0 0 0 11.5 8H16v8.5a1.5 1.5 0 0 1-1.5 1.5H8v-2.355a4 4 0 0 0-4-6.52V3.5A1.5 1.5 0 0 1 5.5 2H10Zm1 .25V6.5a.5.5 0 0 0 .5.5h4.25L11 2.25ZM8 13a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm-1 3.464A3.982 3.982 0 0 1 5 17a3.982 3.982 0 0 1-2-.535v2.286a.25.25 0 0 0 .378.215L5 17.998l1.622.966A.25.25 0 0 0 7 18.75v-2.286Z"
      />
    </svg>
  );
}
export default DocumentRibbonFilled;
