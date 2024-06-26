import type { SVGProps } from "react";

export function ArrowCircleDownSplit(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="m8.793 12.414l-1.44 1.44a.5.5 0 0 1-.707 0l-1.439-1.44a.5.5 0 0 1 .707-.707l.586.586V8.5A.5.5 0 0 1 7 8h2.5V5.5a.5.5 0 0 1 1 0V8H13a.5.5 0 0 1 .5.5v3.793l.586-.586a.5.5 0 0 1 .707.707l-1.44 1.44a.5.5 0 0 1-.707 0l-1.439-1.44a.5.5 0 0 1 .707-.707l.586.586V9h-5v3.293l.586-.586a.5.5 0 1 1 .707.707ZM10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm7-8a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"
      />
    </svg>
  );
}
export default ArrowCircleDownSplit;
