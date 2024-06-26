import type { SVGProps } from "react";

export function PaintBrushFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 4.499v-2.5H5.5a.5.5 0 0 0-.5.5v6.5h10V2.5a.5.5 0 0 0-.5-.5H13v3.502a.5.5 0 0 1-1 0V2h-1v2.5a.5.5 0 0 1-1 0Zm5 5.5H5v1.004a2 2 0 0 0 2 2h1.5v3.498a1.5 1.5 0 1 0 3 0v-3.498H13a2 2 0 0 0 2-2V10Z"
      />
    </svg>
  );
}
export default PaintBrushFilled;
