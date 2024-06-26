import type { SVGProps } from "react";

export function MoleculeFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17 6a4 4 0 0 1-7.326 2.222l-1.668.834a3.496 3.496 0 0 1 .828 3.511l2.7 1.388a2.5 2.5 0 1 1-.449.894l-2.689-1.383a3.5 3.5 0 1 1-1.291-5.077l2.12-1.06A4 4 0 1 1 17 6Z"
      />
    </svg>
  );
}
export default MoleculeFilled;
