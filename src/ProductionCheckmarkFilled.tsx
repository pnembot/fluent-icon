import type { SVGProps } from "react";

export function ProductionCheckmarkFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Zm6.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm.5 3V4h2v2h-2ZM6 8a4 4 0 1 0 0 8h3.207A5.504 5.504 0 0 1 9 14.5c0-.626.105-1.228.297-1.789a1 1 0 0 1 .937-1.684A5.49 5.49 0 0 1 14.5 9c1.035 0 2.003.286 2.83.783A3.996 3.996 0 0 0 14 8H6Zm0 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2Zm13 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.854-1.854L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708Z"
      />
    </svg>
  );
}
export default ProductionCheckmarkFilled;
