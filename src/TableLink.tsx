import type { SVGProps } from "react";

export function TableLink(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h3.837a3.476 3.476 0 0 1-.302-1H8v-3h2.05a3.49 3.49 0 0 1 2.45-1h.5V8h3v4h.5c.17 0 .337.012.5.035V5.5ZM12 8v4H8V8h4Zm-8 6.5V13h3v3H5.5l-.144-.007A1.5 1.5 0 0 1 4 14.5ZM12 7H8V4h4v3Zm1-3h1.5l.145.007A1.5 1.5 0 0 1 16 5.5V7h-3V4ZM4 7V5.5l.007-.144A1.5 1.5 0 0 1 5.5 4H7v3H4Zm3 1v4H4V8h3Zm3 7.5a2.5 2.5 0 0 1 2.5-2.5h.5a.5.5 0 0 1 0 1h-.5a1.5 1.5 0 0 0 0 3h.5a.5.5 0 0 1 0 1h-.5a2.5 2.5 0 0 1-2.5-2.5Zm5.5-2a.5.5 0 0 1 .5-.5h.5a2.5 2.5 0 0 1 0 5H16a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 0 0-3H16a.5.5 0 0 1-.5-.5Zm-3 1.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4Z"
      />
    </svg>
  );
}
export default TableLink;
