import type { SVGProps } from "react";

export function NavigationPlay(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.5 5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-15Zm0 5a.5.5 0 0 0 0 1h8.757c.313-.38.677-.716 1.08-1H2.5Zm7.707 6a5.489 5.489 0 0 1-.185-1H2.5a.5.5 0 0 0 0 1h7.707ZM20 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.287-.437l-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874Z"
      />
    </svg>
  );
}
export default NavigationPlay;
