import type { SVGProps } from "react";

export function Molecule(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M13 10a4 4 0 1 0-3.774-2.672l-2.121 1.06a3.5 3.5 0 1 0 1.291 5.077l2.69 1.384A2.503 2.503 0 0 0 13.5 18a2.5 2.5 0 1 0-1.966-4.045l-2.7-1.388a3.496 3.496 0 0 0-.828-3.511l1.668-.834A3.996 3.996 0 0 0 13 10Zm0-1a3 3 0 1 1 0-6a3 3 0 0 1 0 6Zm-7.5 5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Zm9.5 1.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  );
}
export default Molecule;
