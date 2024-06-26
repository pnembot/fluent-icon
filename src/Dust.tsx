import type { SVGProps } from "react";

export function Dust(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M5.75 3.5a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM12 3.001a4.001 4.001 0 0 0-3.91 3.15A4.003 4.003 0 0 0 3 10.002a4 4 0 0 0 5.09 3.85A4.001 4.001 0 0 0 16 13a3.99 3.99 0 0 0-1.354-3A4 4 0 0 0 12 3ZM9.003 6.862a3 3 0 1 1 4.543 2.71a.5.5 0 0 0 0 .857a3 3 0 1 1-4.543 2.71a.5.5 0 0 0-.714-.428a3 3 0 1 1 0-5.42a.5.5 0 0 0 .714-.429ZM5.75 18a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5ZM19 10a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Z"
      />
    </svg>
  );
}
export default Dust;
