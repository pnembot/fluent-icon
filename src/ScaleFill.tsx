import type { SVGProps } from "react";

export function ScaleFill(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 6.5a.498.498 0 0 1 .144-.351l.005-.005A.498.498 0 0 1 6.5 6h2a.5.5 0 0 1 0 1h-.793l1.147 1.146a.5.5 0 1 1-.708.708L7 7.707V8.5a.5.5 0 0 1-1 0v-2Zm.038 7.191A.499.499 0 0 1 6 13.5v-2a.5.5 0 0 1 1 0v.793l1.146-1.147a.5.5 0 0 1 .708.708L7.707 13H8.5a.5.5 0 0 1 0 1H6.497a.499.499 0 0 1-.46-.309Zm7.653-7.653c.058.024.113.06.16.106l.005.005A.5.5 0 0 1 14 6.5v2a.5.5 0 0 1-1 0v-.793l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 7H11.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .191.038Zm.16 7.818A.499.499 0 0 1 13.5 14h-2a.5.5 0 0 1 0-1h.793l-1.147-1.146a.5.5 0 0 1 .708-.708L13 12.293V11.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-.144.351l-.005.005ZM3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5Z"
      />
    </svg>
  );
}
export default ScaleFill;
