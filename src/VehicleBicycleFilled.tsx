import type { SVGProps } from "react";

export function VehicleBicycleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.75 2a.75.75 0 0 0 0 1.5h1.126l.368 2H7.25v-.75A.75.75 0 0 0 6.5 4h-2a.75.75 0 0 0 0 1.5h1.25v.703l-.352 2.813a3.75 3.75 0 1 0 4.064 3.2l3.227-4.301l.243 1.323A3.751 3.751 0 0 0 14.25 16.5a3.75 3.75 0 0 0 .165-7.496l-1.177-6.39A.75.75 0 0 0 12.5 2h-1.75ZM7.146 7.132A.746.746 0 0 0 7.207 7H11.5l-2.688 3.584A3.758 3.758 0 0 0 6.89 9.176l.256-2.044ZM3.5 12.75a2.25 2.25 0 0 1 1.705-2.183l-.2 1.59A.75.75 0 0 0 5.75 13h2.236a2.25 2.25 0 0 1-4.486-.25Zm3.1-1.25l.098-.79c.376.174.695.449.923.79H6.6Zm6.612-.747l.3 1.633a.75.75 0 0 0 1.476-.272l-.29-1.57a2.25 2.25 0 1 1-1.486.21Z"
      />
    </svg>
  );
}
export default VehicleBicycleFilled;
