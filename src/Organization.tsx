import type { SVGProps } from "react";

export function Organization(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a3 3 0 0 0-.5 5.96V9.5h-3A1.5 1.5 0 0 0 5 11v1.042a3.001 3.001 0 1 0 1 0V11a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1.042a3.001 3.001 0 1 0 1 0V11a1.5 1.5 0 0 0-1.5-1.5h-3V7.96A3.001 3.001 0 0 0 10 2ZM8 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0ZM3.5 15a2 2 0 1 1 4.001 0A2 2 0 0 1 3.5 15Zm11-2a2 2 0 1 1 0 4.001a2 2 0 0 1 0-4.001Z"
      />
    </svg>
  );
}
export default Organization;
