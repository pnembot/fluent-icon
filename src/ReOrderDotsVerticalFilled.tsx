import type { SVGProps } from "react";

export function ReOrderDotsVerticalFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Zm0 5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM8 14.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM13.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3ZM15 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0ZM13.5 16a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z"
      />
    </svg>
  );
}
export default ReOrderDotsVerticalFilled;
