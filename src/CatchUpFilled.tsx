import type { SVGProps } from "react";

export function CatchUpFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M7.671 7.144a.25.25 0 0 1 .46.018l2.333 6.206c.545 1.448 2.564 1.529 3.222.128l1.223-2.603a.25.25 0 0 1 .226-.143H16.2a1.5 1.5 0 1 0 .001-1.5h-1.066a1.75 1.75 0 0 0-1.584 1.006l-1.222 2.602a.25.25 0 0 1-.46-.018L9.535 6.634c-.545-1.448-2.564-1.529-3.222-.128l-1.223 2.6a.25.25 0 0 1-.226.144H3.8a1.5 1.5 0 1 0 0 1.5h1.066A1.75 1.75 0 0 0 6.45 9.744l1.222-2.6Z"
      />
    </svg>
  );
}
export default CatchUpFilled;
