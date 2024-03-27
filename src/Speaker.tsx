import type { SVGProps } from "react";

export function Speaker(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.317 2.273c.612-.568 1.59-.177 1.674.622l.006.111v13.988c0 .835-.952 1.286-1.595.804l-.085-.071l-3.872-3.594a.5.5 0 0 0-.247-.124L6.105 14H3.497a1.5 1.5 0 0 1-1.493-1.356l-.007-.144v-5a1.5 1.5 0 0 1 1.356-1.493L3.497 6h2.608a.5.5 0 0 0 .265-.076l.075-.057l3.872-3.594zm.68.733L7.125 6.6a1.5 1.5 0 0 1-.86.391L6.106 7H3.497a.5.5 0 0 0-.492.41l-.008.09v5a.5.5 0 0 0 .41.492l.09.008h2.608a1.5 1.5 0 0 1 .896.297l.124.103l3.872 3.594V3.006zm4.966 1.66a8 8 0 0 1 0 10.668a.5.5 0 1 1-.745-.668a7 7 0 0 0 0-9.332a.5.5 0 0 1 .745-.668zm-1.2 2.584a5.498 5.498 0 0 1 .001 5.5a.5.5 0 1 1-.866-.5a4.498 4.498 0 0 0-.001-4.5a.5.5 0 0 1 .866-.5z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </svg>
  );
}
export default Speaker;
