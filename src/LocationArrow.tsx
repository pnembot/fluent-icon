import type { SVGProps } from "react";

export function LocationArrow(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M17.93 3.362c.31-.81-.484-1.604-1.293-1.293L2.64 7.453c-.906.348-.834 1.653.105 1.9l5.973 1.572a.5.5 0 0 1 .356.356l1.572 5.973c.247.94 1.552 1.01 1.9.105L17.93 3.362Zm-.934-.36L11.613 17l-1.572-5.973a1.5 1.5 0 0 0-1.069-1.069L3 8.386l13.997-5.383Z"
      />
    </svg>
  );
}
export default LocationArrow;
