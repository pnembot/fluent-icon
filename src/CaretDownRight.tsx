import type { SVGProps } from "react";

export function CaretDownRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13.293 5.25c.63-.63 1.707-.184 1.707.707V13.5a1.5 1.5 0 0 1-1.5 1.5H5.957c-.89 0-1.337-1.077-.707-1.707l8.043-8.043Zm.707.707L5.957 14H13.5a.5.5 0 0 0 .5-.5V5.957Z"
      />
    </svg>
  );
}
export default CaretDownRight;
