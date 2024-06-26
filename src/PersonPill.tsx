import type { SVGProps } from "react";

export function PersonPill(props: Omit<SVGProps<SVGSVGElement>, 'viewBox'|'xmlns'>) {
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
        d="M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8ZM7 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm5.879 5h-7.87A2.001 2.001 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797c1.094.697 2.512 1.08 4.056 1.178a3.615 3.615 0 0 1-.285-1.026c-1.278-.121-2.394-.46-3.233-.996C4.623 15.283 4 14.31 4 13c0-.553.448-1 1.009-1h6.87l1-1Zm5.475-.353a2.621 2.621 0 0 0-3.708 0l-4 4a2.621 2.621 0 0 0 3.707 3.707l4-4a2.621 2.621 0 0 0 0-3.707Zm-3 .707a1.621 1.621 0 1 1 2.292 2.293L16 15.293L13.707 13l1.646-1.646Zm-1.5 4.292a.5.5 0 0 1 0 .708l-1 1a.5.5 0 0 1-.708-.708l1-1a.5.5 0 0 1 .708 0Z"
      />
    </svg>
  );
}
export default PersonPill;
