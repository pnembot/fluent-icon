import type { SVGProps } from "react";

export function OrganizationHorizontal(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M2 10a3 3 0 0 0 5.96.5H9.5v3A1.5 1.5 0 0 0 11 15h1.042a3.001 3.001 0 1 0 0-1H11a.5.5 0 0 1-.5-.5v-7A.5.5 0 0 1 11 6h1.042a3.001 3.001 0 1 0 0-1H11a1.5 1.5 0 0 0-1.5 1.5v3H7.96A3.001 3.001 0 0 0 2 10Zm3 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm10 4.5a2 2 0 1 1 0-4.002a2 2 0 0 1 0 4.001ZM13 5.498a2 2 0 1 1 4.001 0a2 2 0 0 1-4.001 0Z"
      />
    </svg>
  );
}
export default OrganizationHorizontal;
