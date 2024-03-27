import type { SVGProps } from "react";

export function ServerPlayFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.5 2A2.5 2.5 0 0 0 5 4.5v11A2.5 2.5 0 0 0 7.5 18h2.757a5.475 5.475 0 0 1-1.235-3H7.5a.5.5 0 0 1 0-1h1.522a5.48 5.48 0 0 1 .185-1H7.5a.5.5 0 0 1 0-1h2.1A5.5 5.5 0 0 1 15 9.022V4.5A2.5 2.5 0 0 0 12.5 2h-5ZM7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm12 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.287-.437l-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874Z"
      />
    </svg>
  );
}
export default ServerPlayFilled;
