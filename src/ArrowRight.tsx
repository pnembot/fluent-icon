import type { SVGProps } from "react";

export function ArrowRight(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10.837 3.13a.5.5 0 0 0-.674.74L16.33 9.5H2.5a.5.5 0 0 0 0 1h13.828l-6.165 5.628a.5.5 0 0 0 .674.739l6.916-6.314a.747.747 0 0 0 0-1.108L10.837 3.13Z"
      />
    </svg>
  );
}
export default ArrowRight;
