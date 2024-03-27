import type { SVGProps } from "react";

export function ClosedCaptionOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708l1.48 1.479A3 3 0 0 0 2 7v6a3 3 0 0 0 3 3h10c.094 0 .188-.004.28-.013l1.866 1.867a.5.5 0 0 0 .708-.708l-1.48-1.479l-3.697-3.697l-1.054-1.054l-1.119-1.119l-1.562-1.562L7.767 7.06L4.72 4.013L2.854 2.146ZM7.31 8.018a1.108 1.108 0 0 0-.462.117C6.437 8.34 6 8.885 6 10s.437 1.66.849 1.865c.429.215.947.132 1.297-.219a.5.5 0 1 1 .708.708a2.12 2.12 0 0 1-2.453.406C5.563 12.34 5 11.385 5 10c0-1.385.563-2.34 1.401-2.76l.09-.042l.82.82Zm3.419.59L6.12 4H15a3 3 0 0 1 3 3v6a2.99 2.99 0 0 1-.819 2.06l-5.637-5.637c.122-.733.471-1.122.805-1.288a1.12 1.12 0 0 1 1.297.219a.5.5 0 0 0 .708-.708A2.12 2.12 0 0 0 11.9 7.24c-.518.26-.931.724-1.171 1.369Z"
      />
    </svg>
  );
}
export default ClosedCaptionOffFilled;
