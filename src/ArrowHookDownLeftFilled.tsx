import type { SVGProps } from "react";

export function ArrowHookDownLeftFilled(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M6 4.75A.75.75 0 0 1 6.75 4h4.5c1.586 0 2.696.621 3.53 1.588C15.6 6.54 16 7.784 16 9c0 1.216-.3 2.46-1.12 3.412c-.834.967-2.044 1.588-3.63 1.588H6.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 .02-1.08l3.5-3.25a.75.75 0 0 1 1.02 1.1l-2.1 1.95h4.59c1.164 0 1.86-.441 2.4-1.068c.554-.642.85-1.523.85-2.432s-.296-1.79-.85-2.432c-.54-.627-1.236-1.068-2.4-1.068h-4.5A.75.75 0 0 1 6 4.75Z"
      />
    </svg>
  );
}
export default ArrowHookDownLeftFilled;
