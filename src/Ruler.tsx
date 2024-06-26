import type { SVGProps } from "react";

export function Ruler(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 3.5A1.5 1.5 0 0 0 12.5 2h-5A1.5 1.5 0 0 0 6 3.5v13A1.5 1.5 0 0 0 7.5 18h5a1.5 1.5 0 0 0 1.5-1.5v-13Zm-7 9.504h2.5a.5.5 0 0 0 0-1H7V10.5h1.5a.5.5 0 0 0 0-1H7V8h2.5a.5.5 0 0 0 0-1H7V5.5h1.5a.5.5 0 0 0 0-1H7v-1a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-1h1.5a.5.5 0 0 0 0-1H7v-1.496Z"
      />
    </svg>
  );
}
export default Ruler;
