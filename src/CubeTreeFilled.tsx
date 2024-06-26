import type { SVGProps } from "react";

export function CubeTreeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.573 2.066a1.5 1.5 0 0 1 .854 0l2.858.85a1 1 0 0 1 .715.958v4.254a1 1 0 0 1-.715.958l-2.792.83A.506.506 0 0 1 10.5 10v1H12a2 2 0 0 1 2 2v.05a2.5 2.5 0 1 1-1 0V13a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v.05a2.5 2.5 0 1 1-1 0V13a2 2 0 0 1 2-2h1.5v-1c0-.03.002-.057.007-.085l-2.792-.83A1 1 0 0 1 6 8.128V3.874a1 1 0 0 1 .715-.959l2.858-.849Zm-.915 2.46a.5.5 0 0 0-.316.95L9.5 5.86V7a.5.5 0 0 0 1 0V5.86l1.158-.386a.5.5 0 1 0-.316-.948L10 4.974l-1.342-.447Z"
      />
    </svg>
  );
}
export default CubeTreeFilled;
