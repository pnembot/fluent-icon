import type { SVGProps } from "react";

export function PersonSubtract(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm-1.991 5A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18c.085 0 .17 0 .255-.003a5.506 5.506 0 0 1-.659-1.004c-1.567-.052-2.937-.41-3.923-1.04C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1h4.59c.184-.358.405-.693.658-1H5.01ZM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-7 0a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z"
      />
    </svg>
  );
}
export default PersonSubtract;
