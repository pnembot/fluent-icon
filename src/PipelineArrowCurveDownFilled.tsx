import type { SVGProps } from "react";

export function PipelineArrowCurveDownFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M1 5.5A4.5 4.5 0 0 1 5.502 1A4.5 4.5 0 1 1 1 5.5Zm6.399.896l-.897.897V5.75A2.75 2.75 0 0 0 3.75 3H3.5a.5.5 0 1 0 0 1h.25c.967 0 1.75.784 1.75 1.75v1.543l-.896-.897a.5.5 0 0 0-.708.708L5.65 8.856a.499.499 0 0 0 .705-.002l1.751-1.75a.5.5 0 1 0-.707-.708ZM1.994 9.74a5.477 5.477 0 0 0 3.002 1.237v3.524a1.5 1.5 0 0 1-3.002-.001V9.74ZM10.978 6a5.502 5.502 0 0 1-4.982 4.978V14h8.003V6h-3.02ZM16.5 4a1.5 1.5 0 0 0-1.501 1.5v9a1.5 1.5 0 0 0 3.001 0v-9A1.5 1.5 0 0 0 16.5 4Z"
      />
    </svg>
  );
}
export default PipelineArrowCurveDownFilled;
