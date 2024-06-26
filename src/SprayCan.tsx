import type { SVGProps } from "react";

export function SprayCan(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
  const {width = "1em", height="1em", ...rest} = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fill="currentColor"
        d="M9.5 4a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1ZM11 2.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm0 2a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm2-3a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm0 2a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm0 2a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0Zm-3.025.872c.006.022.01.041.013.064l.005.026A.122.122 0 0 1 10 6.5v6.75A1.75 1.75 0 0 1 8.25 15h-3.5A1.75 1.75 0 0 1 3 13.25V6.5c0-.013.003-.026.007-.038c.002-.008.005-.017.006-.026a.501.501 0 0 1 .134-.29l1.854-1.853V2.5a.5.5 0 0 1 .5-.5H7.5a.5.5 0 0 1 .5.5v1.792l1.854 1.854a.497.497 0 0 1 .121.226ZM7.001 3h-1v1h1V3Zm.293 2H5.708l-1 1h3.586l-1-1Zm.957 9a.75.75 0 0 0 .75-.75V7h-5v6.25c0 .414.336.75.75.75h3.5Z"
      />
    </svg>
  );
}
export default SprayCan;
