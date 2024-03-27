import type { SVGProps } from "react";

export function SparkleCircleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16ZM8.825 5.583l.257.726a1 1 0 0 0 .609.609l.725.257c.778.275.778 1.374 0 1.65l-.725.256a1 1 0 0 0-.609.61l-.257.726c-.275.777-1.375.777-1.65 0l-.256-.726a1 1 0 0 0-.61-.61l-.726-.256c-.777-.275-.777-1.375 0-1.65l.726-.257a1 1 0 0 0 .61-.61l.256-.725c.275-.777 1.374-.778 1.65 0Zm2.505 4.416c.2-.665 1.142-.665 1.341 0l.178.594c.08.268.29.478.559.559l.594.178c.665.2.665 1.142 0 1.341l-.594.178a.833.833 0 0 0-.56.56l-.177.592c-.2.666-1.141.666-1.34 0l-.18-.594a.833.833 0 0 0-.559-.559l-.591-.177c-.666-.2-.666-1.142-.001-1.341l.593-.178a.833.833 0 0 0 .559-.559L11.33 10Z"
      />
    </svg>
  );
}
export default SparkleCircleFilled;
