import type { SVGProps } from "react";

export function ToggleMultipleFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M3 5.5A3.5 3.5 0 0 1 6.5 2h7a3.5 3.5 0 1 1 0 7h-7A3.5 3.5 0 0 1 3 5.5Zm5 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0ZM6.5 11a3.5 3.5 0 1 0 0 7h7a3.5 3.5 0 1 0 0-7h-7Zm7 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z"
      />
    </svg>
  );
}
export default ToggleMultipleFilled;
