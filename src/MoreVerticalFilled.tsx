import type { SVGProps } from "react";

export function MoreVerticalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 6.5A1.75 1.75 0 1 1 10 3a1.75 1.75 0 0 1 0 3.5ZM10 17a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5Zm-1.75-7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0Z"
      />
    </svg>
  );
}
export default MoreVerticalFilled;
