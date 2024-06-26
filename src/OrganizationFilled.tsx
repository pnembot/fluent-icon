import type { SVGProps } from "react";

export function OrganizationFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7 5a3 3 0 1 1 3.5 2.96V9.5h3A1.5 1.5 0 0 1 15 11v1.041a3.001 3.001 0 1 1-1 0V11a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v1.041a3.001 3.001 0 1 1-1 0V11a1.5 1.5 0 0 1 1.5-1.5h3V7.96A3.001 3.001 0 0 1 7 5Z"
      />
    </svg>
  );
}
export default OrganizationFilled;
