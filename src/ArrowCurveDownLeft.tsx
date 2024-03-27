import type { SVGProps } from "react";

export function ArrowCurveDownLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.257 2.929a.5.5 0 0 0-.514-.858c-1.315.79-2.269 1.732-2.882 3.028C9.253 6.38 9 7.965 9 10v6.293l-3.146-3.146a.5.5 0 1 0-.708.707l4 4a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0-.708-.707L10 16.293V10c0-1.965.247-3.38.764-4.473c.512-1.08 1.308-1.887 2.493-2.598Z"
      />
    </svg>
  );
}
export default ArrowCurveDownLeft;
