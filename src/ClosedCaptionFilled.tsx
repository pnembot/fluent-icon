import type { SVGProps } from "react";

export function ClosedCaptionFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5 4a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H5Zm1.401 3.24a2.12 2.12 0 0 1 2.453.406a.5.5 0 0 1-.708.708a1.12 1.12 0 0 0-1.297-.22C6.437 8.342 6 8.886 6 10c0 1.115.437 1.66.849 1.865c.429.215.947.132 1.297-.219a.5.5 0 1 1 .708.708a2.12 2.12 0 0 1-2.453.406C5.563 12.34 5 11.385 5 10c0-1.385.563-2.34 1.401-2.76Zm7.953.406a.5.5 0 0 1-.708.708a1.12 1.12 0 0 0-1.297-.22c-.412.207-.849.751-.849 1.866c0 1.115.437 1.66.849 1.865c.429.215.947.132 1.297-.219a.5.5 0 0 1 .708.708a2.12 2.12 0 0 1-2.453.406c-.838-.42-1.401-1.375-1.401-2.76c0-1.385.563-2.34 1.401-2.76a2.12 2.12 0 0 1 2.453.406Z"
      />
    </svg>
  );
}
export default ClosedCaptionFilled;
