import type { SVGProps } from "react";

export function ToggleLeft(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4Zm12-2a4 4 0 0 0-4-4H6a4 4 0 1 0 0 8h8a4 4 0 0 0 4-4Zm-4-3a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6h8Z"
      />
    </svg>
  );
}
export default ToggleLeft;
