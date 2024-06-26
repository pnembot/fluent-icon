import type { SVGProps } from "react";

export function BeakerOffFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.854 2.146a.5.5 0 1 0-.708.708L7.25 7.957v.79a2.5 2.5 0 0 1-.296 1.18L6.11 11.5h4.682l1 1H5.575l-1.227 2.292A1.5 1.5 0 0 0 5.67 17h8.66c.552 0 1.007-.287 1.266-.697l1.55 1.55a.5.5 0 0 0 .708-.707l-15-15ZM7.25 5.13l6.37 6.37h.268l-.843-1.572a2.5 2.5 0 0 1-.296-1.181V4h.75a.5.5 0 0 0 0-1h-7a.5.5 0 0 0 0 1h.75v1.129Z"
      />
    </svg>
  );
}
export default BeakerOffFilled;
