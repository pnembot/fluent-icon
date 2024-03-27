import type { SVGProps } from "react";

export function CircleEdit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 3a7 7 0 0 0-.77 13.958l-.173.695c-.024.096-.04.192-.05.286A8.001 8.001 0 0 1 10 2a8.001 8.001 0 0 1 7.952 7.12a2.883 2.883 0 0 0-1.022-.113A7.002 7.002 0 0 0 10 3Zm.98 12.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.197 2.197 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.18 2.18 0 0 1 .578-1.02Z"
      />
    </svg>
  );
}
export default CircleEdit;
