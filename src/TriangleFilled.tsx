import type { SVGProps } from "react";

export function TriangleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M1.176 15.8A1.5 1.5 0 0 0 2.502 18h14.995a1.5 1.5 0 0 0 1.318-2.215l-7.6-14C10.643.731 9.13.74 8.57 1.798l-7.394 14Z"
      />
    </svg>
  );
}
export default TriangleFilled;
