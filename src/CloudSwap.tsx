import type { SVGProps } from "react";

export function CloudSwap(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 4c2.817 0 4.415 1.923 4.647 4.246h.07c1.814 0 3.283 1.512 3.283 3.377c0 .379-.06.743-.172 1.083l-.84-.84c.008-.08.012-.16.012-.243c0-1.32-1.028-2.377-2.282-2.377h-.071a1 1 0 0 1-.995-.9C13.45 6.325 12.109 5 10 5C7.886 5 6.551 6.316 6.348 8.345a1 1 0 0 1-.995.901h-.07C4.027 9.246 3 10.304 3 11.623C3 12.943 4.028 14 5.282 14h2.803a1.506 1.506 0 0 0 0 1H5.282C3.469 15 2 13.488 2 11.623C2 9.82 3.373 8.347 5.102 8.251l.251-.005C5.587 5.908 7.183 4 10 4Zm1.854 8.854a.5.5 0 0 0-.708-.708l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L10.707 15h5.586l-1.147 1.146a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L16.293 14h-5.586l1.147-1.146Z"
      />
    </svg>
  );
}
export default CloudSwap;
