import type { SVGProps } from "react";

export function SurfaceHub(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M4.76 2.453A.5.5 0 0 1 5.26 2H15.5a.5.5 0 0 1 .498.547l-.759 8a.5.5 0 0 1-.498.453h-.665l.919 6.43a.5.5 0 0 1-.99.14L13.638 15h-2.276l-.367 2.57a.5.5 0 0 1-.99-.14l.347-2.43h-2.99l-.367 2.57a.5.5 0 0 1-.99-.14L6.923 11H4.5a.5.5 0 0 1-.498-.547l.759-8ZM7.506 14h2.99l.429-3h-2.99l-.429 3Zm4 0h1.99l-.429-3h-1.132l-.429 3Zm2.782-4l.663-7H5.713l-.663 7h9.237Z"
      />
    </svg>
  );
}
export default SurfaceHub;
