import type { SVGProps } from "react";

export function NavigationPlayFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2.75 5a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5H2.75ZM2 10.75a.75.75 0 0 1 .75-.75h9.587a5.53 5.53 0 0 0-1.447 1.5H2.75a.75.75 0 0 1-.75-.75ZM2.75 15h7.272a5.47 5.47 0 0 0 .353 1.5H2.75a.75.75 0 0 1 0-1.5ZM20 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-2.287-.437l-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874Z"
      />
    </svg>
  );
}
export default NavigationPlayFilled;
