import type { SVGProps } from "react";

export function ToggleLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M14 6a4 4 0 0 1 0 8H6a4 4 0 0 1 0-8h8Zm-8 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
      />
    </svg>
  );
}
export default ToggleLeftFilled;
