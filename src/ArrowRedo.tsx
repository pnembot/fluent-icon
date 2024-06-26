import type { SVGProps } from "react";

export function ArrowRedo(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M15.003 2.5a.5.5 0 0 1 1 0v4.9a.6.6 0 0 1-.6.6h-4.9a.5.5 0 0 1 0-1h3.594l-3.473-3.019a4 4 0 1 0-5.248 6.038l8.172 7.104a.5.5 0 1 1-.656.754L4.72 10.774a5 5 0 1 1 6.56-7.547l3.723 3.236V2.5Z"
      />
    </svg>
  );
}
export default ArrowRedo;
