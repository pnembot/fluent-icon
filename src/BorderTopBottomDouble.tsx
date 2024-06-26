import type { SVGProps } from "react";

export function BorderTopBottomDouble(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.054 5.41a.497.497 0 0 1 .02-.072A3.001 3.001 0 0 1 6 3h8c1.43 0 2.625 1 2.927 2.338a.509.509 0 0 1-.38.663a.509.509 0 0 1-.6-.462A2 2 0 0 0 14 4H6a2 2 0 0 0-1.947 1.54a.509.509 0 0 1-.6.462a.509.509 0 0 1-.4-.592ZM16.5 12a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5Zm-13 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1h-13ZM3 14.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5Zm0-3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-1 0v3Z"
      />
    </svg>
  );
}
export default BorderTopBottomDouble;
