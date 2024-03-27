import type { SVGProps } from "react";

export function LayerDiagonal(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.5 3.5a.5.5 0 0 0-.685-.464L3.948 5.36A1.5 1.5 0 0 0 3 6.754v5.743a.5.5 0 0 0 .684.465L4 12.836v1.075a1.5 1.5 0 0 1-2-1.414V6.754A2.5 2.5 0 0 1 3.58 4.43l5.867-2.324a1.5 1.5 0 0 1 2.05 1.301l-.998.395V3.5Zm3 2.001a.5.5 0 0 0-.685-.465l-6.183 2.45A1 1 0 0 0 6 8.414v6.082a.5.5 0 0 0 .684.465L8 14.44v1.076l-.947.376A1.5 1.5 0 0 1 5 14.497V8.415a2 2 0 0 1 1.264-1.86l6.183-2.449a1.5 1.5 0 0 1 2.052 1.395v.102L13.5 6v-.498Zm2.816 1.534A.5.5 0 0 1 17 7.5v6.623a.5.5 0 0 1-.316.465l-6 2.376A.5.5 0 0 1 10 16.5V9.876a.5.5 0 0 1 .316-.465l6-2.376ZM18 7.5a1.5 1.5 0 0 0-2.052-1.395l-6 2.377A1.5 1.5 0 0 0 9 9.876V16.5a1.5 1.5 0 0 0 2.052 1.394l6-2.376A1.5 1.5 0 0 0 18 14.123V7.5Z"
      />
    </svg>
  );
}
export default LayerDiagonal;
