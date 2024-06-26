import type { SVGProps } from "react";

export function DataPieFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M8.003 4.07C8.55 3.992 9 4.448 9 5v6h6c.552 0 1.008.45.93.997A7.002 7.002 0 0 1 2 11a7.002 7.002 0 0 1 6.003-6.93ZM17.062 10c.498 0 .927-.366.937-.864L18 9a7 7 0 0 0-7.136-6.999c-.498.01-.864.44-.864.937V9a1 1 0 0 0 1 1h6.062Z"
      />
    </svg>
  );
}
export default DataPieFilled;
