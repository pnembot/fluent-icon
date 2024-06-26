import type { SVGProps } from "react";

export function Wifi2(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14.597 9.357a6.635 6.635 0 0 1 1.194 1.656a.5.5 0 1 1-.89.455a5.638 5.638 0 0 0-1.011-1.404a5.45 5.45 0 0 0-8.716 1.39a.5.5 0 0 1-.892-.452a6.45 6.45 0 0 1 10.315-1.645Zm-1.71 2.497c.355.354.647.79.85 1.254a.5.5 0 1 1-.916.401a3.138 3.138 0 0 0-.64-.948a3.033 3.033 0 0 0-4.29 0a3.051 3.051 0 0 0-.63.938a.5.5 0 1 1-.917-.401a4.04 4.04 0 0 1 .84-1.244a4.033 4.033 0 0 1 5.704 0Zm-1.924 1.933a1.298 1.298 0 1 1-1.836 1.836a1.298 1.298 0 0 1 1.836-1.836Z"
      />
    </svg>
  );
}
export default Wifi2;
