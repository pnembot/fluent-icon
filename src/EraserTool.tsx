import type { SVGProps } from "react";

export function EraserTool(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 2a.5.5 0 0 1 .5.5V6h12V2.5a.5.5 0 0 1 1 0v12a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 3 14.5v-12a.5.5 0 0 1 .5-.5Zm.5 9v3.5A2.5 2.5 0 0 0 6.5 17h7a2.5 2.5 0 0 0 2.5-2.5V11H4Zm12-1V7H4v3h12Z"
      />
    </svg>
  );
}
export default EraserTool;
