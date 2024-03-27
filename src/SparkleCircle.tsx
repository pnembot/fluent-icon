import type { SVGProps } from "react";

export function SparkleCircle(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3a7 7 0 1 0 0 14a7 7 0 0 0 0-14Zm-8 7a8 8 0 1 1 16 0a8 8 0 0 1-16 0Zm5.175-4.417c.275-.777 1.374-.778 1.65 0l.257.726a1 1 0 0 0 .609.609l.725.257c.778.275.778 1.374 0 1.65l-.725.256a1 1 0 0 0-.609.61l-.257.726c-.275.777-1.375.777-1.65 0l-.256-.726a1 1 0 0 0-.61-.61l-.726-.256c-.777-.275-.777-1.375 0-1.65l.726-.257a1 1 0 0 0 .61-.61l.256-.725ZM12.672 10c-.2-.666-1.141-.666-1.341 0l-.179.593a.833.833 0 0 1-.558.559L10 11.33c-.666.2-.665 1.142 0 1.34l.592.178c.269.08.479.29.56.559l.178.595c.2.665 1.142.665 1.34 0l.179-.594a.833.833 0 0 1 .559-.559l.593-.178c.665-.2.665-1.141 0-1.341l-.594-.178a.833.833 0 0 1-.558-.559L12.672 10Z"
      />
    </svg>
  );
}
export default SparkleCircle;
