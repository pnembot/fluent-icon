import type { SVGProps } from "react";

export function BuildingRetailShield(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3.5 3A1.5 1.5 0 0 0 3 5.915V16.5a.5.5 0 0 0 .5.5H10v-4.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5V16H4V6h12v2.405c.052.041.102.086.15.134c.223.229.513.49.85.729V5.915A1.5 1.5 0 0 0 16.5 3h-13ZM3 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5ZM9 16H6v-3h3v3Zm6-7.938V7.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h4.583c.185-.528.65-.885 1.14-1H6V8h8v.405a1.61 1.61 0 0 1 1-.342Zm3.501 2.903c-1.37-.193-2.486-1.134-3.066-1.726a.624.624 0 0 0-.87 0c-.58.592-1.695 1.533-3.066 1.726c-.274.038-.499.259-.499.535V14c0 3.468 3.182 4.727 3.87 4.959a.4.4 0 0 0 .26 0C15.818 18.727 19 17.469 19 14v-2.5c0-.276-.225-.497-.499-.535Z"
      />
    </svg>
  );
}
export default BuildingRetailShield;
