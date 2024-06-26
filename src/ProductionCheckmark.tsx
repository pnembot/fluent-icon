import type { SVGProps } from "react";

export function ProductionCheckmark(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3Zm6.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3Zm.5 3V4h2v2h-2ZM2 12a4 4 0 0 1 4-4h8c1.39 0 2.613.708 3.33 1.783a5.474 5.474 0 0 0-3.118-.776A3.044 3.044 0 0 0 14 9H6a3 3 0 1 0 0 6h3.022a5.5 5.5 0 0 0 .185 1H6a4 4 0 0 1-4-4Zm8-1c.08 0 .16.01.235.028a5.491 5.491 0 0 0-.938 1.683A1 1 0 0 1 10 11Zm-4 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm13 1.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.854-1.854L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708Z"
      />
    </svg>
  );
}
export default ProductionCheckmark;
