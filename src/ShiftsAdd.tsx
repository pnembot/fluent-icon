import type { SVGProps } from "react";

export function ShiftsAdd(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 3a3 3 0 0 0-3 3v3.6a5.463 5.463 0 0 1 1-.393V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.207c-.099.349-.23.683-.393 1H14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6Zm-.5 16a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9Zm0-7a.5.5 0 0 1 .5.5V14h1.5a.5.5 0 0 1 0 1H6v1.5a.5.5 0 0 1-1 0V15H3.5a.5.5 0 0 1 0-1H5v-1.5a.5.5 0 0 1 .5-.5ZM11 6.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H11V6.5Z"
      />
    </svg>
  );
}
export default ShiftsAdd;
