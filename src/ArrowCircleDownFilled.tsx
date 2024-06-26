import type { SVGProps } from "react";

export function ArrowCircleDownFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0Zm-4.646.854a.5.5 0 0 0-.708-.708L10.5 12.293V6.5a.5.5 0 0 0-1 0v5.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3Z"
      />
    </svg>
  );
}
export default ArrowCircleDownFilled;
