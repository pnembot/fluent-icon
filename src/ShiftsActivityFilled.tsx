import type { SVGProps } from "react";

export function ShiftsActivityFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M9.997 2.707a.75.75 0 0 1-.67.822a6.506 6.506 0 1 0 7.144 7.145a.75.75 0 1 1 1.492.153a8.006 8.006 0 1 1-8.788-8.79a.75.75 0 0 1 .822.67Zm1.02-.066a.75.75 0 0 1 .905-.555c.378.09.747.208 1.103.35a.75.75 0 0 1-.555 1.393a6.65 6.65 0 0 0-.898-.284a.75.75 0 0 1-.554-.904Zm6.547 4.333a.75.75 0 0 0-1.394.555c.115.29.211.59.285.898a.75.75 0 1 0 1.459-.35a8.05 8.05 0 0 0-.35-1.103ZM14.29 3.926a.75.75 0 0 1 1.058-.073c.307.267.594.557.858.867a.75.75 0 0 1-1.143.972a6.646 6.646 0 0 0-.7-.708a.75.75 0 0 1-.073-1.058ZM10 5.75a.75.75 0 0 0-1.5 0v5c0 .415.336.75.75.75h3a.75.75 0 1 0 0-1.5H10V5.75Z"
      />
    </svg>
  );
}
export default ShiftsActivityFilled;
