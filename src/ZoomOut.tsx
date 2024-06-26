import type { SVGProps } from "react";

export function ZoomOut(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M11 8a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1h5Zm3 .5a5.5 5.5 0 1 0-1.98 4.227l4.126 4.127l.07.057a.5.5 0 0 0 .638-.765l-4.127-4.126A5.478 5.478 0 0 0 14 8.5Zm-10 0a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0Z"
      />
    </svg>
  );
}
export default ZoomOut;
